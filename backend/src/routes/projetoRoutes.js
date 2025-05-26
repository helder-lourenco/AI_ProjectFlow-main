const express = require("express");
const router = express.Router();
const { criarProjeto } = require("../controllers/projetoController");

router.post("/", criarProjeto);

module.exports = router;
