# 🤖 AI ProjectFlow — Plataforma de Gestão Inteligente de Projetos

Bem-vindo ao **AI ProjectFlow**, a solução definitiva para transformar o gerenciamento de projetos com **inteligência artificial**, automações e uma experiência de usuário moderna e poderosa.

---

## 🌟 O que é o AI ProjectFlow?

O **AI ProjectFlow** é uma plataforma completa de **gestão de projetos e portfólio**, voltada para PMOs, equipes de desenvolvimento e gestores de inovação que buscam:

- 📊 Organizar e priorizar projetos com clareza
- 🧠 Utilizar IA para gerar escopos, esforços, prazos e frameworks automaticamente
- 📅 Controlar o ciclo de vida do projeto com dashboards interativos
- 🧑‍💻 Identificar o melhor desenvolvedor para cada projeto
- 🎥 Transcrever reuniões e gerar planos com IA a partir do áudio
- 📬 Enviar resumos e propostas aos participantes automaticamente
- 🔒 Controlar o acesso por perfil (ADM, Dev, PO)
- 🎨 Personalizar cores, logo e configurações de IA

---

## 🚀 Principais Funcionalidades

### 💼 Gestão de Projetos

- Criação de novos projetos com descrição, valor, tecnologias
- Geração automática de plano usando IA (Gemini/GPT)
- Estimativas de custo, prazo e esforço baseadas em dados

### 📊 Dashboard Dinâmico

- Visualização clara de status: **No prazo**, **Atenção**, **Fora do prazo**
- Gráficos de progresso e alertas por e-mail

### 👤 Gestão de Usuários

- Acesso segmentado por perfil (admin, dev, po, etc.)
- Tela administrativa para criação, edição e ativação de usuários
- Pop-up com solicitações de acesso pendentes

### 🧠 IA Personalizável

- Configuração de prompt padrão para geração de plano
- Tela para cadastrar e testar novos prompts IA
- Baseada em Gemini (Google) e suporte a OpenAI

### 📹 Transcrição de Reuniões

- Upload de gravações ou integração com Teams, Zoom ou Meet
- Transcrição via STT (Whisper, Google STT)
- Resumo da reunião + escopo do projeto sugerido com IA

### 🎨 Configuração do Sistema

- Escolha de cor principal e logo
- Custo-hora configurável para cálculos de projeto
- Salvo por administrador na aba **Configurações**

---

## 🧑‍💻 Tecnologias Utilizadas

| Camada         | Tecnologias                              |
| -------------- | ---------------------------------------- |
| Front-end      | HTML, CSS, JS, Supabase JS SDK           |
| Back-end       | Node.js + Express                        |
| IA             | Gemini (Google), OpenAI, Whisper STT     |
| Banco de dados | Supabase (PostgreSQL + Auth + Storage)   |
| Transcrição    | API externa (Google STT, OpenAI Whisper) |
| Design         | Material Icons + UI Clean Minimalista    |
| Upload/Storage | Supabase Storage com buckets públicos    |

---

## 🗂️ Estrutura de Diretórios

```
AI_ProjectFlow/
├── backend/
│   └── src/
│       ├── app.js
│       ├── routes/
│       │   ├── iaRoutes.js
│       │   ├── emailRoutes.js
│       │   └── ...
├── frontend/
│   ├── index.html
│   ├── login.html
│   ├── novo-projeto.html
│   ├── painel-admin.html
│   ├── configuracoes.html
│   ├── assets/
│       ├── js/
│       └── css/
├── ia_service/
│   ├── main.py
│   └── ai/planner.py
└── README.md
```

---

## ⚙️ Como Executar o Projeto

### 🔧 Pré-requisitos

- Node.js v18+
- Python 3.10+
- Conta no [Supabase](https://supabase.com)
- API key Gemini (ou OpenAI opcional)

---

### 📦 1. Clone o projeto

```bash
git clone https://github.com/seuusuario/ai-projectflow.git
cd ai-projectflow
```

---

### 🔁 2. Backend (Node.js)

```bash
cd backend
npm install
node src/app.js
```

---

### 💻 3. Frontend (HTML estático)

```bash
cd frontend
npx live-server
```

Acesse: [http://127.0.0.1:8080/login.html](http://127.0.0.1:8080/login.html)

---

### 🤖 4. Serviço de IA (opcional)

```bash
cd ia_service
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

---

### 🧪 5. Ambiente `.env` (backend)

Crie um arquivo `backend/.env`:

```env
SUPABASE_URL=https://xyz.supabase.co
SUPABASE_KEY=public-anon-key
SMTP_USER=seu-email@gmail.com
SMTP_PASS=sua-senha-app
```

---

## 🧪 Tabelas Supabase

- ✅ `usuarios`
- ✅ `configuracoes`
- ✅ `reunioes`
- ✅ `prompts_customizados`

```sql
-- Execute no SQL Editor do Supabase (ver no README completo)
```

---

## 🧠 Exemplo de Fluxo de IA com Reunião

1. Usuário grava reunião e envia o áudio
2. Transcrição com API STT
3. Texto é enviado para a IA (Gemini)
4. IA gera resumo + escopo + tecnologias + estimativa
5. Resultado é salvo na tela de reunião e notificado por e-mail

---

## 🛠️ Equipe e Contribuição

Desenvolvido por 🚀 helder-lks

Contribuições, feedbacks e forks são bem-vindos!

---

## 📄 Licença

Este projeto é open-source sob licença MIT.
