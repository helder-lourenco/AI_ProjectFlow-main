require("dotenv").config();
const express = require("express");
const cors = require("cors");
const projetoRoutes = require("./routes/projetoRoutes");
const emailRoutes = require("./routes/emailRoutes");
const iaRoutes = require("./routes/iaRoutes"); // ✅ Importar rotas de IA

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/projetos", projetoRoutes);
app.use("/api/email", emailRoutes);

// Serve frontend
const path = require("path");
app.use(express.static(path.join(__dirname, "../../frontend")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend/login.html"));
});

app.listen(process.env.PORT, () =>
  console.log(`🚀 Servidor rodando na porta ${process.env.PORT}`)
);

// Usar rotas de IA
app.use("/api/ia", iaRoutes);
