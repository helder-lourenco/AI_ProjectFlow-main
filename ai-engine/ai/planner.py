def analisar_projeto(projeto):
    titulo = projeto.titulo
    descricao = projeto.descricao
    prazo = projeto.prazo
    valor = projeto.valor_estimado
    metodologias = ", ".join(projeto.metodologias)

    # Simulação de lógica de IA com base na entrada
    complexidade = "Alta" if len(descricao.split()) > 50 else "Média"
    esforco = 200 if "integração" in descricao.lower() else 120
    retorno = 30 if valor > 10000 else 60

    plano = f"""
    Projeto: {titulo}
    Metodologias aplicadas: {metodologias}

    Etapas recomendadas:
    1. Diagnóstico: compreender o escopo descrito.
    2. Planejamento com {metodologias.split(',')[0]}.
    3. Execução em sprints semanais.
    4. Validação e entrega final.

    Complexidade estimada: {complexidade}
    """

    return {
        "classificacao": f"{complexidade} Prioridade",
        "esforco_estimado_horas": esforco,
        "retorno_estimado_dias": retorno,
        "custo_estimado": valor or 8000,
        "melhor_dev": "Alocado via IA",
        "plano": plano.strip()
    }
