const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const supabase = require("../services/supabaseService");

// POST /api/email/aprovar
router.post("/aprovar", async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: "E-mail é obrigatório" });

  // Atualiza no Supabase
  const { error } = await supabase
    .from("usuarios")
    .update({ status: "ativo" })
    .eq("email", email);

  if (error)
    return res.status(500).json({ message: "Erro ao aprovar usuário" });

  // Envia e-mail
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: `"Projetos AI" <${process.env.SMTP_USER}>`,
    to: email,
    subject: "Acesso aprovado",
    html: `
      <h3>Olá!</h3>
      <p>Seu acesso à plataforma Projetos AI foi aprovado.</p>
      <p><a href="http://localhost:5000/login.html">Clique aqui para acessar</a></p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ message: "Usuário aprovado e e-mail enviado com sucesso" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Erro ao enviar e-mail", error: err.message });
  }
});

module.exports = router;
