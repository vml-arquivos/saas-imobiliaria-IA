# 📦 Guia de Configuração do GitHub - Casa DF CRM

Este guia explica como subir o sistema Casa DF para o GitHub e configurar para deploy.

---

## 🚀 Passo a Passo

### 1. Criar Repositório no GitHub

1. Acesse [github.com](https://github.com) e faça login
2. Clique no botão **"+"** no canto superior direito → **"New repository"**
3. Configure o repositório:
   - **Repository name:** `casadf-crm`
   - **Description:** "Sistema CRM completo para Casa DF Imóveis - Gestão de imóveis, leads, contratos e aluguéis"
   - **Visibility:** Private (recomendado) ou Public
   - **NÃO** marque "Initialize this repository with a README"
4. Clique em **"Create repository"**

### 2. Preparar o Código Local

Extraia o arquivo `casadf-crm-completo.zip` que você baixou:

```bash
# Descompactar ZIP
unzip casadf-crm-completo.zip
cd casadf-crm

# Instalar dependências (opcional, para testar)
pnpm install
```

### 3. Inicializar Git e Fazer Primeiro Commit

```bash
# Inicializar repositório Git
git init

# Adicionar todos os arquivos
git add .

# Fazer primeiro commit
git commit -m "🎉 Primeiro commit: Sistema Casa DF CRM completo

- Frontend moderno com React 19 + Tailwind 4
- Backend tRPC + Express + MySQL
- Sistema de gestão de imóveis e leads
- CRM completo com gestão de aluguéis
- Integração N8N para automação
- Corretor virtual com IA
- Upload de múltiplas fotos
- Comparação de imóveis
- 21 imóveis de exemplo em Brasília"

# Renomear branch para main
git branch -M main
```

### 4. Conectar ao Repositório Remoto

Substitua `SEU_USUARIO` pelo seu nome de usuário do GitHub:

```bash
git remote add origin https://github.com/SEU_USUARIO/casadf-crm.git
```

### 5. Fazer Push para o GitHub

```bash
# Push inicial
git push -u origin main
```

Se solicitado, faça login com suas credenciais do GitHub.

**Dica:** Se você usa autenticação de dois fatores, precisará criar um **Personal Access Token**:
1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token → Marcar `repo` → Generate token
3. Copiar o token e usar como senha no `git push`

---

## 📁 Estrutura do Repositório

Após o push, seu repositório terá a seguinte estrutura:

```
casadf-crm/
├── client/                  # Frontend React
│   ├── src/
│   │   ├── components/      # Componentes reutilizáveis
│   │   ├── pages/           # Páginas da aplicação
│   │   ├── contexts/        # Contexts React
│   │   └── hooks/           # Custom hooks
│   └── public/              # Assets estáticos
├── server/                  # Backend Express + tRPC
│   ├── routers.ts           # Rotas tRPC
│   ├── db.ts                # Funções do banco
│   └── _core/               # Core do servidor
├── drizzle/                 # Schema do banco de dados
│   └── schema.ts
├── n8n-workflows/           # Workflows de automação
│   ├── Lara-Secretaria.json
│   ├── 6-Assistenteinterno.json
│   └── ...
├── scripts/                 # Scripts utilitários
│   ├── seed.mjs
│   └── add-more-properties.mjs
├── docker-compose.yml       # Configuração Docker
├── Dockerfile               # Build da aplicação
├── package.json             # Dependências
├── README.md                # Documentação principal
├── DEPLOY.md                # Guia de deploy
└── todo.md                  # Lista de tarefas

```

---

## 🔐 Configurar Secrets no GitHub (Para CI/CD)

Se você quiser configurar deploy automático via GitHub Actions:

1. No repositório, vá em **Settings** → **Secrets and variables** → **Actions**
2. Clique em **"New repository secret"**
3. Adicione os seguintes secrets:

| Nome | Descrição | Exemplo |
|------|-----------|---------|
| `DATABASE_URL` | URL de conexão do banco | `mysql://user:pass@host:3306/db` |
| `JWT_SECRET` | Segredo JWT | `sua_chave_secreta_32_chars` |
| `VERCEL_TOKEN` | Token da Vercel (se usar) | `token_vercel` |
| `DOCKER_USERNAME` | Usuário Docker Hub | `seu_usuario` |
| `DOCKER_PASSWORD` | Senha Docker Hub | `sua_senha` |

---

## 🌿 Estratégia de Branches

Recomendamos a seguinte estrutura de branches:

### Branch Principal: `main`

- Código em produção
- Sempre estável
- Deploy automático (se configurado)

### Branch de Desenvolvimento: `dev`

```bash
# Criar branch dev
git checkout -b dev
git push -u origin dev
```

- Código em desenvolvimento
- Testes e experimentos
- Merge para `main` quando estável

### Branches de Features: `feature/nome-da-feature`

```bash
# Exemplo: adicionar nova funcionalidade
git checkout -b feature/calculadora-financiamento
# ... fazer alterações ...
git add .
git commit -m "feat: adicionar calculadora de financiamento"
git push -u origin feature/calculadora-financiamento
```

- Uma branch para cada nova funcionalidade
- Criar Pull Request para `dev` quando pronto
- Deletar após merge

---

## 🔄 Workflow de Desenvolvimento

### Fluxo Recomendado

```
feature/nova-funcionalidade → dev → main
```

1. **Criar feature branch** a partir de `dev`
2. **Desenvolver** a funcionalidade
3. **Testar** localmente
4. **Commit** com mensagem descritiva
5. **Push** para o GitHub
6. **Criar Pull Request** para `dev`
7. **Revisar** código (se trabalhar em equipe)
8. **Merge** para `dev`
9. **Testar** em ambiente de staging
10. **Merge** `dev` → `main` para produção

### Convenção de Commits

Use commits semânticos para melhor organização:

```bash
# Nova funcionalidade
git commit -m "feat: adicionar upload de múltiplas fotos"

# Correção de bug
git commit -m "fix: corrigir erro no filtro de bairros"

# Documentação
git commit -m "docs: atualizar README com instruções de deploy"

# Refatoração
git commit -m "refactor: otimizar query de busca de imóveis"

# Estilo/formatação
git commit -m "style: formatar código com Prettier"

# Testes
git commit -m "test: adicionar testes para PropertyCard"

# Build/CI
git commit -m "chore: atualizar dependências"
```

---

## 🚀 Deploy Automático (Opcional)

### Opção 1: Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Clique em **"New Project"**
3. Importe o repositório `casadf-crm`
4. Vercel detectará automaticamente o projeto
5. Configure variáveis de ambiente
6. Deploy!

**Deploy automático:** Todo push na branch `main` fará deploy automaticamente.

### Opção 2: GitHub Actions + VPS

Crie `.github/workflows/deploy.yml`:

```yaml
name: Deploy to VPS

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Deploy to VPS
        uses: appleboy/ssh-action@master
        with:
          host: ${{ secrets.VPS_HOST }}
          username: ${{ secrets.VPS_USER }}
          key: ${{ secrets.SSH_PRIVATE_KEY }}
          script: |
            cd /home/casadf/casadf-crm
            git pull origin main
            docker-compose down
            docker-compose up -d --build
```

---

## 📝 Atualizar README.md

Edite o `README.md` para personalizar com suas informações:

```markdown
# 🏠 Casa DF - CRM Imobiliário

Sistema completo de gestão imobiliária para Casa DF.

## 🚀 Funcionalidades

- ✅ Gestão de imóveis (venda e aluguel)
- ✅ CRM completo com leads e funil de vendas
- ✅ Sistema de gestão de contratos de locação
- ✅ Controle financeiro (repasses, comissões, despesas)
- ✅ Corretor virtual com IA (N8N + OpenAI)
- ✅ Upload de múltiplas fotos
- ✅ Comparação de imóveis
- ✅ Blog integrado
- ✅ SEO otimizado

## 🛠️ Tecnologias

- **Frontend:** React 19, Tailwind CSS 4, TypeScript
- **Backend:** Node.js 22, Express, tRPC
- **Banco de Dados:** MySQL 8
- **Automação:** N8N
- **Deploy:** Docker, Docker Compose

## 📦 Instalação

```bash
git clone https://github.com/seu-usuario/casadf-crm.git
cd casadf-crm
pnpm install
pnpm db:push
pnpm dev
```

## 🚀 Deploy

Veja [DEPLOY.md](./DEPLOY.md) para instruções completas.

## 📞 Contato

- **Email:** contato@casadf.com.br
- **WhatsApp:** (61) 98148-8353
- **Site:** https://casadf.com.br
```

---

## ✅ Checklist Final

Antes de fazer push para o GitHub:

- [ ] Remover arquivos `.env` com credenciais reais
- [ ] Verificar se `.gitignore` está correto
- [ ] Atualizar `README.md` com informações corretas
- [ ] Testar se o código compila (`pnpm build`)
- [ ] Verificar se não há credenciais hardcoded no código
- [ ] Adicionar licença (MIT, Apache, etc)
- [ ] Criar tags de versão (`git tag v1.0.0`)

---

## 🆘 Problemas Comuns

### Erro: "Permission denied (publickey)"

**Solução:** Configure SSH key no GitHub:

```bash
# Gerar nova chave SSH
ssh-keygen -t ed25519 -C "seu-email@example.com"

# Copiar chave pública
cat ~/.ssh/id_ed25519.pub

# Adicionar no GitHub: Settings → SSH and GPG keys → New SSH key
```

### Erro: "Large files detected"

**Solução:** Arquivos grandes (>100MB) não podem ser commitados diretamente. Use Git LFS:

```bash
# Instalar Git LFS
git lfs install

# Rastrear arquivos grandes
git lfs track "*.mp4"
git lfs track "*.zip"

# Commit
git add .gitattributes
git commit -m "chore: configurar Git LFS"
```

### Erro: "Repository not found"

**Solução:** Verifique se a URL do remote está correta:

```bash
git remote -v
# Se estiver errada, corrigir:
git remote set-url origin https://github.com/SEU_USUARIO/casadf-crm.git
```

---

## 📚 Recursos Úteis

- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)
- [GitHub Docs](https://docs.github.com)
- [Conventional Commits](https://www.conventionalcommits.org)
- [Semantic Versioning](https://semver.org)

---

**Autor:** Manus AI  
**Data:** Dezembro 2024  
**Versão:** 1.0.0
