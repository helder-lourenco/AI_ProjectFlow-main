🤖 AI ProjectFlow — Plataforma de Gestão Inteligente de Projetos
Bem-vindo ao AI ProjectFlow, a solução definitiva para transformar o gerenciamento de projetos com inteligência artificial, automações e uma experiência de usuário moderna e poderosa.

🌟 O que é o AI ProjectFlow?
O AI ProjectFlow é uma plataforma completa de gestão de projetos e portfólio, voltada para PMOs, equipes de desenvolvimento e gestores de inovação que buscam:

📊 Organizar e priorizar projetos com clareza
🧠 Utilizar IA para gerar escopos, esforços, prazos e frameworks automaticamente
📅 Controlar o ciclo de vida do projeto com dashboards interativos
🧑‍💻 Identificar o melhor desenvolvedor para cada projeto
🎥 Transcrever reuniões e gerar planos com IA a partir do áudio
📬 Enviar resumos e propostas aos participantes automaticamente
🔒 Controlar o acesso por perfil (ADM, Dev, PO)
🎨 Personalizar cores, logo e configurações de IA
🚀 Principais Funcionalidades
💼 Gestão de Projetos
Criação de novos projetos com descrição, valor, tecnologias
Geração automática de plano usando IA (Gemini/GPT)
Estimativas de custo, prazo e esforço baseadas em dados
📊 Dashboard Dinâmico
Visualização clara de status: No prazo, Atenção, Fora do prazo
Gráficos de progresso e alertas por e-mail
👤 Gestão de Usuários
Acesso segmentado por perfil (admin, dev, po, etc.)
Tela administrativa para criação, edição e ativação de usuários
Pop-up com solicitações de acesso pendentes
🧠 IA Personalizável
Configuração de prompt padrão para geração de plano
Tela para cadastrar e testar novos prompts IA
Baseada em Gemini (Google) e suporte a OpenAI
📹 Transcrição de Reuniões
Upload de gravações ou integração com Teams, Zoom ou Meet
Transcrição via STT (Whisper, Google STT)
Resumo da reunião + escopo do projeto sugerido com IA
🎨 Configuração do Sistema
Escolha de cor principal e logo
Custo-hora configurável para cálculos de projeto
Salvo por administrador na aba Configurações
🧑‍💻 Tecnologias Utilizadas
Camada Tecnologias
Front-end HTML, CSS, JS, Supabase JS SDK
Back-end Node.js + Express
IA Gemini (Google), OpenAI, Whisper STT
Banco de dados Supabase (PostgreSQL + Auth + Storage)
Transcrição API externa (Google STT, OpenAI Whisper)
Design Material Icons + UI Clean Minimalista
Upload/Storage Supabase Storage com buckets públicos
Automação/Mensageria n8n

Exportar para as Planilhas
🗂️ Estrutura de Diretórios
AI_ProjectFlow/
├── backend/
│ └── src/
│ ├── app.js
│ ├── routes/
│ │ ├── iaRoutes.js
│ │ ├── emailRoutes.js
│ │ └── ...
├── frontend/
│ ├── index.html
│ ├── login.html
│ ├── novo-projeto.html
│ ├── painel-admin.html
│ ├── configuracoes.html
│ ├── assets/
│ ├── js/
│ └── css/
├── ia_service/
│ ├── main.py
│ └── ai/planner.py
└── README.md
⚙️ Como Executar o Projeto
🔧 Pré-requisitos
Node.js v18+
Python 3.10+
Conta no Supabase
API key Gemini (ou OpenAI opcional)
Instância do n8n (self-hosted ou cloud)
📦 1. Clone o projeto
Bash

git clone https://github.com/seuusuario/ai-projectflow.git
cd ai-projectflow
🔁 2. Backend (Node.js)
Bash

cd backend
npm install
node src/app.js
💻 3. Frontend (HTML estático)
Bash

cd frontend
npx live-server
Acesse: http://127.0.0.1:8080/login.html

🤖 4. Serviço de IA (opcional)
Bash

cd ia_service
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
🧪 5. Ambiente .env (backend)
Crie um arquivo backend/.env:

Snippet de código

SUPABASE_URL=https://xyz.supabase.co
SUPABASE_KEY=public-anon-key
SMTP_USER=seu-email@gmail.com
SMTP_PASS=sua-senha-app
N8N_WEBHOOK_URL=sua-webhook-n8n-url # Adicione esta linha para integração com n8n
🧪 Tabelas Supabase
✅ usuarios
✅ configuracoes
✅ reunioes
✅ prompts_customizados

<!-- end list -->

SQL

-- Execute no SQL Editor do Supabase (ver no README completo)
🧠 Exemplo de Fluxo de IA com Reunião
Usuário grava reunião e envia o áudio
Transcrição com API STT
Texto é enviado para a IA (Gemini)
IA gera resumo + escopo + tecnologias + estimativa
Resultado é salvo na tela de reunião e notificado por e-mail
Integração com n8n para envio de notificações personalizadas (WhatsApp, Slack, SMS) ou atualização em sistemas externos.
🔄 Integração com n8n para Automações e Mensageria
O AI ProjectFlow pode ser facilmente integrado com o n8n, uma ferramenta de automação e orquestração de workflows. Isso permite estender as capacidades da plataforma para além do e-mail, habilitando a mensageria e a integração com centenas de outros serviços.

Casos de Uso Exemplares com n8n:
Notificações Multicanal: Após a geração de um resumo de reunião ou plano de projeto pela IA, utilize o n8n para enviar notificações automáticas via:
WhatsApp: Envio de resumos rápidos ou alertas para grupos de projeto.
Slack/Microsoft Teams: Postagem de atualizações de status de projeto ou alertas críticos em canais específicos.
SMS: Notificações urgentes para desenvolvedores sobre projetos com status "Atenção" ou "Fora do Prazo".
Integração com Ferramentas de Gestão: Sincronize dados do AI ProjectFlow com outras ferramentas que sua equipe já utiliza:
Jira/Asana/Trello: Criação automática de tarefas ou issues com base nos escopos gerados pela IA.
CRMs: Atualização de status de projetos que envolvem clientes.
Ferramentas de RH: Notificação para identificar o melhor desenvolvedor em sistemas de gestão de talentos para alocação.
Automação de Processos:
Geração de Relatórios Periódicos: Acione fluxos no n8n para compilar dados dos dashboards e gerar relatórios customizados em intervalos regulares.
Alocação Automática de Desenvolvedores: Com base na identificação do melhor desenvolvedor pela IA, o n8n pode iniciar um fluxo para notificar o dev e atribuir o projeto em sistemas de gestão de tarefas.
Gerenciamento de Acesso: Automatize a criação de usuários em outros sistemas ou o envio de credenciais temporárias após a aprovação de uma solicitação de acesso pendente.
Como Configurar:
Crie um Webhook no n8n: No seu ambiente n8n, crie um workflow que comece com um nó Webhook.
Configure o Backend: Adicione a URL gerada pelo webhook do n8n à variável de ambiente N8N_WEBHOOK_URL no seu arquivo backend/.env.
Envio de Dados: No seu backend Node.js (por exemplo, nas rotas iaRoutes.js ou em lógica de gestão de projetos), faça uma requisição HTTP POST para a N8N_WEBHOOK_URL enviando os dados relevantes (ex: resumo da reunião, status do projeto, detalhes do novo projeto).
Construa o Workflow no n8n: No n8n, você pode então usar os dados recebidos pelo webhook para acionar outras operações (enviar mensagem de WhatsApp, postar no Slack, criar uma tarefa no Jira, etc.).
Com o n8n, o AI ProjectFlow se torna um hub ainda mais poderoso para automação e comunicação, garantindo que as informações geradas pela IA e o status dos projetos alcancem as pessoas certas, nos canais certos e no momento certo, de forma totalmente personalizada e eficiente.

🛠️ Equipe e Contribuição
Desenvolvido por 🚀 helder-lks

Contribuições, feedbacks e forks são bem-vindos!

📄 Licença
Este projeto é open-source sob licença MIT.
