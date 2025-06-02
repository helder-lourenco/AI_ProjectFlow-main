const express = require("express");
const { createClient } = require("@supabase/supabase-js");
const nodemailer = require("nodemailer");
const crypto = require("crypto");

const router = express.Router();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_KEY; // Keep the anon key available
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY; // Get the service role key

// Create a Supabase client with the service role key for admin operations
const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey);

const emailFrom = process.env.EMAIL_FROM;
const smtpHost = process.env.SMTP_HOST;
const smtpPort = process.env.SMTP_PORT;
const smtpUser = process.env.SMTP_USER;
const smtpPassword = process.env.SMTP_PASSWORD;

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  host: smtpHost,
  port: smtpPort,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: smtpUser,
    pass: smtpPassword,
  },
});

router.post("/requestAccess", async (req, res) => {
  try {
    const { nome, email } = req.body;

    // 1. Generate a random password
    const randomPassword = generateRandomPassword(12);

    // 2. Create user in Supabase Auth (using the admin client)
    const { data: authData, error: authError } =
      await supabaseAdmin.auth.admin.createUser({
        email: email,
        password: randomPassword,
        email_confirm: true, // Optional: Auto-confirm the email
      });

    if (authError) {
      console.error("Supabase Auth Error:", authError);

      // Check for the specific "email already registered" error
      if (authError.code === "email_exists") {
        return res.status(400).json({
          success: false,
          message:
            "Este endereço de e-mail já está cadastrado. Por favor, use um endereço diferente ou tente recuperar sua senha.",
        });
      }

      return res.status(500).json({
        success: false,
        message:
          "Falha ao criar usuário no Supabase Auth: " + authError.message,
      });
    }

    const userId = authData.user.id;

    // 3. Insert user data into 'usuarios' table
    const { data: dbData, error: dbError } = await supabaseAdmin
      .from("usuarios")
      .insert([
        {
          id: userId,
          nome: nome,
          email: email,
          "senha-provisoria": randomPassword,
          status: "Pendente",
          role: "analista", // Or your default role
          // created_at: new Date(),  <-- Remove this if you have a default value in Supabase
          // updated_at: new Date(),  <-- Remove this if you have a default value in Supabase
        },
      ]);

    if (dbError) {
      console.error("Supabase DB Error:", dbError);

      // Attempt to delete the user from Supabase Auth if the database insert fails
      const { error: deleteError } = await supabaseAdmin.auth.admin.deleteUser(
        userId
      );
      if (deleteError) {
        console.error(
          "Failed to delete user from Supabase Auth after DB insert failure:",
          deleteError
        );
      }

      return res.status(500).json({
        success: false,
        message:
          "Falha ao inserir dados do usuário no banco de dados: " +
          dbError.message,
      });
    }

    await fetch(`${process.env.BASE_URL}/api/email/solicitar-acesso`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome, email, senha: randomPassword }),
    });

    // 5. Respond with success
    res.json({
      success: true,
      message: "Solicitação de acesso enviada com sucesso!",
    });
  } catch (error) {
    console.error("General error:", error);
    res.status(500).json({
      success: false,
      message: "Ocorreu um erro inesperado: " + error.message,
    });
  }
});

// Helper function to generate a random password
function generateRandomPassword(length) {
  return crypto
    .randomBytes(Math.ceil(length / 2))
    .toString("hex") // convert to hexadecimal format
    .slice(0, length); // return required number of characters
}

// POST /api/email/solicitar-acesso
router.post("/solicitar-acesso", async (req, res) => {
  const { nome, email, senha } = req.body;

  if (!nome || !email || !senha) {
    return res.status(400).json({ message: "Dados incompletos." });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const mailOptions = {
    from: `"Projetos AI" <${process.env.SMTP_USER}>`,
    to: email,
    subject: "Solicitação de Acesso - Senha Temporária",
    html: `
      <p>Olá ${nome},</p>
      <p>Sua solicitação de acesso foi recebida.</p>
      <p>Sua senha temporária é: <strong>${senha}</strong></p>
      <p>Por favor, altere sua senha após o primeiro login.</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ message: "E-mail enviado com sucesso." });
  } catch (err) {
    console.error("Erro ao enviar e-mail:", err);
    res.status(500).json({ message: "Erro ao enviar e-mail." });
  }
});

module.exports = router;
