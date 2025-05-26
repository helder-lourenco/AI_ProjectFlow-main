const express = require("express");
const axios = require("axios");
const router = express.Router();

// POST /api/ia/analisar
router.post("/analisar", async (req, res) => {
  try {
    const projeto = req.body;

    // Envie para seu notebook Gemini ou API do Gemini (exemplo via webhook/HTTP)
    const respostaGemini = await axios.post(
      "https://URL_DO_SEU_COLAB_OU_API_GEMINI",
      projeto
    );

    res.json(respostaGemini.data);
  } catch (error) {
    console.error("Erro ao processar IA:", error.message);
    res.status(500).json({ message: "Erro na IA", error: error.message });
  }
});

module.exports = router;
