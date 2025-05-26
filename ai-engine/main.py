from fastapi import FastAPI
from pydantic import BaseModel
from ai.planner import analisar_projeto

app = FastAPI()

class ProjetoInput(BaseModel):
    titulo: str
    descricao: str
    prazo: str
    valor_estimado: float
    metodologias: list[str]

@app.post("/analisar-projeto")
async def processar_ia(projeto: ProjetoInput):
    resultado = analisar_projeto(projeto)
    return resultado
