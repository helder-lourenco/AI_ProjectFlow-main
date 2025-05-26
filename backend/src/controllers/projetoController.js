const supabase = require("../services/supabaseService");

exports.criarProjeto = async (req, res) => {
  try {
    const { titulo, descricao, prazo, valorEstimado, metodologias } = req.body;

    const { data, error } = await supabase.from("projetos").insert([
      {
        titulo,
        descricao,
        prazo,
        valor_estimado: valorEstimado,
        metodologias,
      },
    ]);

    if (error) throw error;
    res.status(201).json({ message: "Projeto criado com sucesso", data });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Erro ao criar projeto", error: err.message });
  }
};
