# Variáveis de Ambiente - Casa DF CRM

Este documento lista **TODAS** as variáveis de ambiente necessárias para rodar o sistema Casa DF CRM em produção (VPS).

---

## 📋 Variáveis Obrigatórias

### Configurações Gerais

```bash
NODE_ENV=production
PORT=3000
APP_URL=https://casadf.com.br
FRONTEND_URL=https://casadf.com.br
DOMAIN=casadf.com.br
```

### Banco de Dados MySQL

```bash
# URL de conexão completa (usada pela aplicação)
DATABASE_URL=mysql://casadf:SUA_SENHA_AQUI@db:3306/casadf_crm

# Credenciais separadas (usadas pelo docker-compose.yml)
MYSQL_ROOT_PASSWORD=SUA_SENHA_ROOT_AQUI
MYSQL_DATABASE=casadf_crm
MYSQL_USER=casadf
MYSQL_PASSWORD=SUA_SENHA_AQUI
MYSQL_PORT=3306
```

**⚠️ IMPORTANTE:** Substitua `SUA_SENHA_AQUI` por senhas fortes e únicas.

**Como gerar senhas seguras:**
```bash
# Gerar senha forte de 24 caracteres
openssl rand -base64 24
```

### Autenticação JWT

```bash
# Chave secreta para assinar tokens JWT
JWT_SECRET=SUA_CHAVE_JWT_AQUI
```

**Como gerar JWT_SECRET seguro:**
```bash
openssl rand -base64 32
```

---

## 🔐 Variáveis Manus (Já Configuradas Automaticamente)

Estas variáveis são **injetadas automaticamente** pelo ambiente Manus e **NÃO precisam ser configuradas manualmente**:

```bash
# OAuth Manus
VITE_APP_ID=<auto>
OAUTH_SERVER_URL=<auto>
VITE_OAUTH_PORTAL_URL=<auto>
OWNER_OPEN_ID=<auto>
OWNER_NAME=<auto>

# Forge API (Backend)
BUILT_IN_FORGE_API_URL=<auto>
BUILT_IN_FORGE_API_KEY=<auto>

# Forge API (Frontend)
VITE_FRONTEND_FORGE_API_URL=<auto>
VITE_FRONTEND_FORGE_API_KEY=<auto>

# Analytics
VITE_ANALYTICS_ENDPOINT=<auto>
VITE_ANALYTICS_WEBSITE_ID=<auto>

# App Info
VITE_APP_TITLE=Casa DF - Imóveis em Brasília
VITE_APP_LOGO=/logo.png
```

**⚠️ ATENÇÃO:** Se você for fazer deploy em VPS **fora do ambiente Manus**, precisará obter essas credenciais manualmente em [https://manus.im](https://manus.im).

---

## 🤖 N8N - Automação de Workflows

```bash
# Porta do N8N
N8N_PORT=5678

# Credenciais de acesso ao painel N8N
N8N_USER=admin
N8N_PASSWORD=SUA_SENHA_N8N_AQUI

# URL do webhook (usado pelos workflows)
N8N_WEBHOOK_URL=https://casadf.com.br/webhook
```

---

## 🔧 Variáveis Opcionais

### phpMyAdmin (Apenas Desenvolvimento)

```bash
PHPMYADMIN_PORT=8080
```

Para iniciar o phpMyAdmin em modo dev:
```bash
docker-compose --profile dev up -d
```

### Google Maps API (Opcional)

```bash
# Chave de API do Google Maps
VITE_GOOGLE_MAPS_API_KEY=SUA_CHAVE_GOOGLE_MAPS
```

**Como obter:**
1. Acesse [Google Cloud Console](https://console.cloud.google.com/)
2. Crie um projeto
3. Ative a API "Maps JavaScript API"
4. Gere uma chave de API

### Google Gemini AI (Opcional)

```bash
# Chave de API do Google Gemini
GEMINI_API_KEY=SUA_CHAVE_GEMINI
```

**Como obter:**
1. Acesse [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Faça login com sua conta Google
3. Clique em "Create API Key"

### Chatwoot - Chat ao Vivo (Opcional)

```bash
CHATWOOT_URL=https://app.chatwoot.com
CHATWOOT_API_TOKEN=SUA_TOKEN_CHATWOOT
CHATWOOT_ACCOUNT_ID=SEU_ACCOUNT_ID
CHATWOOT_INBOX_ID=SEU_INBOX_ID
```

**Como obter:**
1. Crie uma conta em [Chatwoot](https://www.chatwoot.com/)
2. Acesse Settings → Integrations → API
3. Gere um token de acesso

### WhatsApp Business API (Opcional)

```bash
WHATSAPP_ACCESS_TOKEN=SEU_TOKEN_WHATSAPP
WHATSAPP_PHONE_NUMBER_ID=SEU_PHONE_NUMBER_ID
WHATSAPP_VERIFY_TOKEN=SEU_VERIFY_TOKEN
```

**Como obter:**
1. Acesse [Meta for Developers](https://developers.facebook.com/)
2. Crie um app do tipo "Business"
3. Configure WhatsApp Business API

### SMTP - Envio de E-mails (Opcional)

```bash
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=contato@casadf.com.br
SMTP_PASSWORD=SUA_SENHA_SMTP
SMTP_FROM_EMAIL=contato@casadf.com.br
SMTP_FROM_NAME=Casa DF
```

**Exemplo com Gmail:**
1. Ative a verificação em 2 etapas
2. Gere uma "Senha de app" em [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
3. Use essa senha no `SMTP_PASSWORD`

### S3 / Storage - Upload de Arquivos (Opcional)

```bash
S3_ENDPOINT=https://s3.amazonaws.com
S3_REGION=us-east-1
S3_BUCKET=casadf-uploads
S3_ACCESS_KEY_ID=SUA_ACCESS_KEY
S3_SECRET_ACCESS_KEY=SUA_SECRET_KEY
```

**Alternativas ao AWS S3:**
- **DigitalOcean Spaces** (compatível com S3)
- **MinIO** (self-hosted, open source)
- **Backblaze B2** (mais barato)

### Sentry - Monitoramento de Erros (Opcional)

```bash
SENTRY_DSN=https://sua_chave@sentry.io/projeto
```

**Como obter:**
1. Crie uma conta em [Sentry.io](https://sentry.io/)
2. Crie um projeto Node.js
3. Copie o DSN fornecido

### Redis - Cache (Opcional)

```bash
REDIS_URL=redis://localhost:6379
```

---

## 📝 Como Configurar no VPS

### Método 1: Arquivo .env (Recomendado)

1. Crie um arquivo `.env` na raiz do projeto:
```bash
cd /home/ubuntu/casadf-crm
nano .env
```

2. Cole todas as variáveis necessárias (veja seções acima)

3. Salve e feche (Ctrl+X, Y, Enter)

4. **NUNCA** commite o arquivo `.env` no Git (já está no `.gitignore`)

### Método 2: Docker Compose com arquivo .env

O `docker-compose.yml` já está configurado para ler automaticamente o arquivo `.env`:

```bash
# Criar .env
nano .env

# Subir containers
docker-compose up -d
```

### Método 3: Variáveis de Ambiente do Sistema

```bash
# Adicionar no ~/.bashrc ou ~/.profile
export DATABASE_URL="mysql://casadf:senha@localhost:3306/casadf_crm"
export JWT_SECRET="sua_chave_jwt"

# Recarregar
source ~/.bashrc
```

---

## ✅ Checklist de Configuração

Antes de fazer deploy, verifique:

- [ ] `DATABASE_URL` configurada corretamente
- [ ] `JWT_SECRET` gerado com segurança (32+ caracteres)
- [ ] `MYSQL_ROOT_PASSWORD` e `MYSQL_PASSWORD` fortes e únicos
- [ ] `N8N_PASSWORD` alterado do padrão
- [ ] Domínio `APP_URL` e `FRONTEND_URL` corretos
- [ ] Arquivo `.env` criado e **NÃO** commitado no Git
- [ ] Variáveis opcionais configuradas conforme necessidade

---

## 🔒 Segurança

### Boas Práticas:

1. **NUNCA** commite arquivos `.env` no Git
2. Use senhas **diferentes** para cada serviço
3. Gere senhas com **no mínimo 24 caracteres**
4. Rotacione senhas periodicamente (a cada 3-6 meses)
5. Use HTTPS em produção (configure SSL/TLS)
6. Restrinja acesso ao banco de dados (firewall)
7. Mantenha backups regulares do banco de dados

### Ferramentas Úteis:

```bash
# Gerar senha forte de 32 caracteres
openssl rand -base64 32

# Gerar UUID único
uuidgen

# Verificar variáveis carregadas
docker-compose config
```

---

## 🐛 Troubleshooting

### Erro: "Cannot connect to database"

**Solução:**
1. Verifique se `DATABASE_URL` está correta
2. Confirme que o container MySQL está rodando: `docker ps`
3. Verifique logs: `docker logs casadf-db`

### Erro: "JWT_SECRET is not defined"

**Solução:**
1. Certifique-se de que `JWT_SECRET` está no arquivo `.env`
2. Reinicie os containers: `docker-compose restart`

### Erro: "Port 3000 already in use"

**Solução:**
1. Mude a porta no `.env`: `APP_PORT=3001`
2. Ou pare o processo usando a porta: `lsof -ti:3000 | xargs kill`

---

## 📞 Suporte

Para dúvidas sobre configuração:

- **E-mail:** contato@casadf.com.br
- **WhatsApp:** (61) 98148-8353
- **Documentação:** [DEPLOY.md](./DEPLOY.md)

---

**Última atualização:** Dezembro 2024  
**Versão do Sistema:** 1.0.0
