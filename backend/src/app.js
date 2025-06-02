require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path"); // Import path module
const projetoRoutes = require("./routes/projetoRoutes");
const emailRoutes = require("./routes/emailRoutes");
const iaRoutes = require("./routes/iaRoutes");
const authRoutes = require("./routes/authRoutes"); // Import auth routes

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/projetos", projetoRoutes);
app.use("/api/email", emailRoutes);
app.use("/api/auth", authRoutes); // Use auth routes

// Serve frontend
app.use(express.static(path.join(__dirname, "../../frontend")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend/login.html"));
});

const port = process.env.PORT || 3000; // Use a default port if not in .env
app.listen(port, () => console.log(`🚀 Servidor rodando na porta ${port}`));

// Usar rotas de IA
app.use("/api/ia", iaRoutes);
