# 🏠 Casa DF Imóveis - CRM Imobiliário Completo

Sistema profissional de gestão imobiliária para Brasília/DF com CRM integrado, automação via N8N e WhatsApp, e site otimizado em SEO.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node](https://img.shields.io/badge/node-22.x-green.svg)
![React](https://img.shields.io/badge/react-19.x-blue.svg)
![TypeScript](https://img.shields.io/badge/typescript-5.x-blue.svg)
![PostgreSQL](https://img.shields.io/badge/postgresql-16.x-blue.svg)

## ✨ Funcionalidades

### 🏠 Gestão de Imóveis
O sistema oferece gerenciamento completo de propriedades com recursos avançados de cadastro, busca e apresentação. Cada imóvel pode ter múltiplas fotos armazenadas em S3, informações detalhadas sobre localização, características e valores. A vitrine pública permite busca por tipo, bairro, preço e características específicas como piscina ou churrasqueira. Imóveis em destaque aparecem automaticamente na homepage, e cada propriedade possui uma landing page otimizada para SEO com galeria de fotos, mapa de localização e formulário de contato integrado ao CRM.

### 👥 CRM Avançado
O CRM completo inclui gestão de leads com qualificação automática baseada em score (0-100 pontos), classificando clientes em Quente, Morno ou Frio. O funil de vendas visual tipo Kanban permite acompanhar cada lead desde o primeiro contato até o fechamento. O sistema registra histórico completo de interações, analisa perfil do cliente (investidor, primeira casa, upgrade), e oferece dashboard com métricas em tempo real. A segmentação por perfil permite ações direcionadas, e o sistema de follow-up automático identifica clientes que precisam de atenção urgente.

### 💬 Automação WhatsApp + N8N
Integração completa com N8N permite automação de workflows complexos. O sistema captura leads automaticamente do site e WhatsApp, qualifica através de IA (Lívia 3.0), envia follow-ups programados para clientes sem contato há 3+ dias, e faz matching automático entre perfil do cliente e imóveis disponíveis. Todas as mensagens são registradas no CRM com contexto completo, e webhooks permitem integração bidirecional com outros sistemas.

### 📝 Blog Imobiliário
Sistema completo de blog com CRUD administrativo, categorias, upload de imagens de capa, e integração automática na homepage. Cada artigo possui URL amigável (slug), meta tags otimizadas para SEO, e compartilhamento social. O blog ajuda a atrair tráfego orgânico e posicionar a marca como autoridade no mercado imobiliário de Brasília.

### 📊 Analytics e Relatórios
Dashboard completo com métricas de vendas, conversão, origem de leads e performance por imóvel. Rastreamento de eventos (visualizações, cliques, formulários), análise de ROI por campanha de marketing, e relatórios financeiros com previsão de receita baseada no pipeline. Integração com Manus Analytics para métricas avançadas.

## 🚀 Stack Tecnológico

### Frontend
O frontend utiliza **React 19** para interface moderna e responsiva, estilizado com **Tailwind CSS 4** e componentes de alta qualidade do **shadcn/ui**. O roteamento é feito com **Wouter** (leve e eficiente), e a comunicação com o backend usa **tRPC** para chamadas type-safe end-to-end. Animações suaves com **Framer Motion** e gráficos com **Recharts** completam a experiência do usuário.

### Backend
Backend em **Node.js 22** com **Express 4**, utilizando **tRPC 11** para APIs type-safe. O **Drizzle ORM** gerencia o banco de dados PostgreSQL com migrations automáticas. **Superjson** permite serialização avançada de tipos complexos (Date, Map, Set). Autenticação via **Manus OAuth** com tokens **JWT** seguros.

### Banco de Dados
**PostgreSQL 16** como banco de dados principal, mais robusto e escalável que MySQL. O **Drizzle Kit** gerencia schema e migrations de forma type-safe. Estrutura com 15+ tabelas incluindo imóveis, leads, interações, blog, analytics, transações financeiras e webhooks.

### Storage e Integrações
Imagens de imóveis armazenadas em **AWS S3** com URLs presignadas. Integração com **N8N** para automação de workflows, **WhatsApp Business API** para comunicação com clientes, e **Google Maps API** para localização de imóveis.

## 📁 Estrutura do Projeto

```
casadf-crm/
├── client/                    # Frontend React
│   ├── public/               # Assets estáticos
│   └── src/
│       ├── components/       # Componentes reutilizáveis
│       │   ├── ui/          # shadcn/ui components
│       │   ├── Header.tsx
│       │   ├── Footer.tsx
│       │   └── HeroSearch.tsx
│       ├── pages/           # Páginas da aplicação
│       │   ├── Home.tsx
│       │   ├── Properties.tsx
│       │   ├── PropertyDetail.tsx
│       │   ├── Blog.tsx
│       │   └── admin/       # Dashboard administrativo
│       ├── lib/             # Utilitários
│       │   └── trpc.ts      # Cliente tRPC
│       ├── App.tsx          # Rotas e layout
│       └── main.tsx         # Entry point
├── server/                   # Backend Node.js
│   ├── _core/               # Infraestrutura
│   │   ├── context.ts       # Contexto tRPC
│   │   ├── env.ts           # Variáveis de ambiente
│   │   └── oauth.ts         # Autenticação OAuth
│   ├── db.ts                # Query helpers
│   ├── routers.ts           # Rotas tRPC
│   └── storage.ts           # Helpers S3
├── drizzle/                 # Banco de dados
│   ├── schema.ts            # Schema PostgreSQL
│   └── migrations/          # Migrations SQL
├── shared/                  # Código compartilhado
│   ├── types.ts             # Tipos TypeScript
│   └── const.ts             # Constantes
├── Dockerfile               # Build Docker
├── docker-compose.yml       # PostgreSQL + N8N + Nginx
├── deploy.sh                # Script de deploy
└── package.json             # Dependências
```

## 🛠️ Instalação Local

### Pré-requisitos
- Node.js 22+
- pnpm 9+
- PostgreSQL 16+ (ou Docker)

### Passo a Passo

1. **Clone o repositório:**
```bash
git clone https://github.com/seu-usuario/casadf-crm.git
cd casadf-crm
```

2. **Instale as dependências:**
```bash
pnpm install
```

3. **Configure as variáveis de ambiente:**
```bash
cp .env.example .env
nano .env  # Configure suas variáveis
```

Variáveis essenciais:
```env
# Banco de Dados PostgreSQL
DATABASE_URL=postgresql://user:password@localhost:5432/casadf

# Autenticação
JWT_SECRET=seu-secret-key-forte

# Manus OAuth
VITE_APP_ID=seu-app-id
OAUTH_SERVER_URL=https://api.manus.im

# Storage S3
AWS_ACCESS_KEY_ID=sua-key
AWS_SECRET_ACCESS_KEY=seu-secret
AWS_REGION=us-east-1
AWS_S3_BUCKET=seu-bucket
```

4. **Execute as migrations:**
```bash
pnpm db:push
```

5. **Inicie o servidor de desenvolvimento:**
```bash
pnpm dev
```

6. **Acesse a aplicação:**
- Frontend: http://localhost:3000
- Dashboard Admin: http://localhost:3000/admin
- API: http://localhost:3000/api

## 🐳 Deploy com Docker

### Deploy Rápido (Recomendado)

```bash
# Configure variáveis
cp .env.example .env
nano .env

# Execute deploy
chmod +x deploy.sh
./deploy.sh
```

### Docker Compose Manual

```bash
# Build e start
docker-compose up -d

# Ver logs
docker-compose logs -f app

# Parar
docker-compose down
```

O `docker-compose.yml` inclui:
- **app**: Aplicação Node.js
- **postgres**: PostgreSQL 16
- **n8n**: Automação de workflows
- **nginx**: Reverse proxy

## 📝 Scripts Disponíveis

```bash
# Desenvolvimento
pnpm dev                    # Inicia dev server (frontend + backend)

# Build
pnpm build                 # Build completo (client + server)
pnpm build:client          # Build apenas frontend
pnpm build:server          # Build apenas backend

# Produção
pnpm start                 # Inicia servidor de produção

# Banco de Dados
pnpm db:push               # Executar migrations
pnpm db:studio             # Interface visual do banco (Drizzle Studio)

# Testes
pnpm test                  # Executar todos os testes
pnpm test:watch            # Testes em modo watch
pnpm test:coverage         # Testes com coverage

# Qualidade de Código
pnpm check                 # Type checking
pnpm format                # Formatar código (Prettier)
```

## 🧪 Testes

O projeto inclui 28+ testes unitários cobrindo:
- Autenticação e autorização
- CRUD de imóveis e leads
- Webhooks N8N
- Rotas tRPC
- Integração WhatsApp

```bash
# Executar testes
pnpm test

# Com coverage
pnpm test:coverage

# Modo watch
pnpm test:watch
```

## 🌐 Deploy em VPS

### Google Cloud Compute Engine

1. **Criar instância:**
```bash
gcloud compute instances create casadf-vm \
  --machine-type=e2-medium \
  --image-family=ubuntu-2204-lts \
  --image-project=ubuntu-os-cloud \
  --boot-disk-size=50GB
```

2. **Conectar via SSH:**
```bash
gcloud compute ssh casadf-vm
```

3. **Instalar Docker:**
```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER
```

4. **Clonar e deploy:**
```bash
git clone https://github.com/seu-usuario/casadf-crm.git
cd casadf-crm
cp .env.example .env
nano .env  # Configure variáveis
./deploy.sh
```

5. **Configurar domínio e SSL:**
```bash
# Instalar Certbot
sudo apt install certbot python3-certbot-nginx

# Obter certificado SSL
sudo certbot --nginx -d casadf.com.br -d www.casadf.com.br
```

### Digital Ocean Droplet

1. **Criar Droplet** (Ubuntu 22.04, 2GB RAM, 50GB SSD)
2. **Conectar via SSH** e seguir passos 3-5 acima

## 📊 Banco de Dados

### Tabelas Principais

O sistema utiliza PostgreSQL com as seguintes tabelas:

- **users** - Usuários e autenticação
- **properties** - Imóveis cadastrados
- **propertyImages** - Galeria de imagens
- **leads** - Leads e clientes
- **interactions** - Histórico de interações
- **messageBuffer** - Mensagens WhatsApp
- **aiContextStatus** - Contexto IA
- **blogPosts** e **blogCategories** - Blog
- **siteSettings** - Configurações do site
- **owners** - Proprietários de imóveis
- **webhookLogs** - Logs de integração
- **analyticsEvents** - Eventos de analytics
- **transactions** - Transações financeiras
- **commissions** - Comissões

### Migrations

```bash
# Gerar migration
pnpm drizzle-kit generate

# Aplicar migrations
pnpm db:push

# Abrir Drizzle Studio
pnpm db:studio
```

## 🔐 Segurança

- ✅ Autenticação JWT com Manus OAuth
- ✅ Proteção CSRF
- ✅ Rate limiting
- ✅ Sanitização de inputs
- ✅ SQL injection protection (Drizzle ORM)
- ✅ XSS protection
- ✅ HTTPS em produção
- ✅ Secrets em variáveis de ambiente
- ✅ Backup automático do banco

## 📞 Contato

**Casa DF Imóveis**
- **Telefone:** (61) 98148-8353
- **Email:** contato@casadf.com.br
- **Endereço:** Guará - DF
- **Website:** https://www.casadf.com.br

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🆘 Suporte

- **Issues:** https://github.com/seu-usuario/casadf-crm/issues
- **Email:** contato@casadf.com.br
- **Documentação:** Veja os arquivos `.md` na raiz do projeto

## 📚 Documentação Adicional

- [Guia de Deploy Docker](./DOCKER_DEPLOY.md)
- [Variáveis de Ambiente](./ENV_VARIABLES.md)
- [Estrutura do Projeto](./PROJECT_STRUCTURE.md)
- [API Documentation](./API_DOCUMENTATION.md)
- [TODO List](./todo.md)

---

Desenvolvido com ❤️ para **Casa DF Imóveis** | Powered by [Manus AI](https://manus.im)
