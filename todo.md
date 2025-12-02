# TODO - Corretor das Mansões

## Fase 1: Schema do Banco de Dados e Estrutura Inicial

- [x] Criar tabela de imóveis (properties)
- [x] Criar tabela de leads/clientes (leads)
- [x] Criar tabela de interações/histórico (interactions)
- [x] Criar tabela de blog posts (blog_posts)
- [x] Criar tabela de categorias de blog (blog_categories)
- [x] Criar tabela de configurações do site (site_settings)
- [x] Executar migrations do banco de dados

## Fase 2: Front-end Premium Estilo Christie's

- [x] Configurar paleta de cores premium (preto, branco, dourado)
- [x] Adicionar fontes serifadas (Playfair Display) e sans-serif (Inter)
- [x] Criar Hero Section com busca integrada
- [x] Criar Header/Navbar premium
- [x] Criar Footer elegante
- [x] Criar página Home com seções principais
- [ ] Criar página Quem Somos
- [ ] Criar página de Contato
- [ ] Criar vitrine de imóveis (grid premium)
- [ ] Criar página de detalhes do imóvel
- [ ] Criar seção de Blog
- [ ] Criar página individual de post do blog
- [ ] Implementar responsividade mobile-first

## Fase 3: CRM Completo

- [x] Criar helpers do banco de dados para todas as tabelas
- [x] Criar routers tRPC para imóveis
- [x] Criar routers tRPC para leads
- [x] Criar routers tRPC para interações
- [x] Criar routers tRPC para blog
- [x] Criar routers tRPC para configurações
- [x] Criar dashboard administrativo
- [x] Implementar gestão de imóveis (CRUD)
- [ ] Implementar upload de fotos de imóveis
- [x] Implementar gestão de leads (CRUD)
- [x] Criar pipeline de vendas (Kanban)
- [x] Criar layout do admin com sidebar
- [x] Implementar histórico de interações
- [x] Criar formulário de captura de leads
- [ ] Implementar notificações de novos leads
- [x] Criar relatórios e dashboards
- [x] Implementar filtros avançados de busca

## Fase 4: Funcionalidades Avançadas

- [ ] Integrar chatbot com IA
- [ ] Criar webhooks para N8N
- [ ] Implementar integração com portais (ZAP, VivaReal)
- [ ] Criar módulo financeiro (propostas, comissões)
- [ ] Implementar sistema de tags para imóveis
- [ ] Criar sistema de favoritos
- [ ] Implementar compartilhamento social
- [ ] Adicionar Google Maps para localização
- [ ] Criar tour virtual 360° (opcional)
- [ ] Implementar busca por voz (opcional)

## Fase 5: Testes e Qualidade

- [x] Criar testes unitários para procedures principais
- [x] Testar fluxo completo de captura de leads
- [x] Testar CRUD de imóveis
- [ ] Testar responsividade em diferentes dispositivos
- [ ] Validar acessibilidade
- [ ] Otimizar performance de imagens
- [x] Popular banco de dados com dados de exemplo
- [x] Criar checkpoint final

## Melhorias Futuras (Backlog)

- [ ] Sistema de agendamento de visitas
- [ ] Integração com WhatsApp Business API
- [ ] Sistema de avaliação de imóveis
- [ ] Calculadora de financiamento
- [ ] Área do cliente (portal)
- [ ] Sistema de referências/indicações
- [ ] Integração com CRM externo (RD Station, HubSpot)

## Correções Urgentes (Solicitadas pelo Usuário)

- [x] Trocar fontes Playfair Display para Montserrat/Poppins
- [x] Adicionar logotipo do Ernani Nunes no header
- [x] Corrigir headers duplicados
- [x] Melhorar dashboard administrativo com análise de clientes
- [x] Criar níveis de análise de clientes (perfis)
- [x] Organizar clientes por categorias para análise de IA
- [x] Testar todas as correções
- [x] Criar checkpoint com correções

## Novos Ajustes Solicitados

- [x] Colocar background preto no hero section
- [x] Colocar fundo preto no header
- [x] Garantir que todos os títulos usem fonte Montserrat
- [x] Adicionar foto do Ernani Nunes na página
- [x] Adicionar link para Dashboard CRM no header
- [x] Testar ajustes
- [x] Criar checkpoint final

## Sistema de Upload de Imóveis com Galeria

- [x] Criar tabela de imagens de imóveis no schema
- [x] Adicionar routers tRPC para upload de imagens
- [x] Integrar com S3 para armazenamento
- [x] Criar interface de upload múltiplo no admin
- [x] Implementar galeria de fotos com preview
- [x] Adicionar funcionalidade de deletar imagens
- [x] Definir imagem principal/destaque
- [x] Criar carrossel de fotos na página pública
- [x] Testar upload e visualização
- [x] Criar checkpoint final

## Página de Detalhes do Imóvel

- [x] Criar página de detalhes com rota dinâmica
- [x] Implementar galeria de fotos com lightbox
- [x] Adicionar seção de características do imóvel
- [x] Integrar mapa de localização (Google Maps)
- [x] Criar formulário de agendamento de visita
- [x] Salvar agendamentos como leads no CRM
- [x] Adicionar botões de compartilhamento social
- [ ] Implementar carrossel de imóveis relacionados
- [x] Criar testes para a nova funcionalidade
- [x] Criar checkpoint final

## Página de Vitrine de Imóveis

- [x] Criar página de vitrine com listagem completa
- [x] Implementar filtros por tipo de imóvel
- [x] Implementar filtros por bairro
- [x] Implementar filtros por finalidade (venda/locação)
- [x] Adicionar ordenação por preço
- [x] Criar visualização em grid responsivo
- [ ] Adicionar paginação
- [x] Mostrar contador de resultados
- [x] Adicionar botão de limpar filtros
- [x] Criar testes para filtros
- [x] Criar checkpoint final

## Sistema de Blog

- [x] Criar página de listagem de posts do blog
- [x] Implementar filtro por categorias
- [x] Adicionar busca por palavras-chave
- [x] Criar página individual de artigo
- [x] Adicionar compartilhamento social nos artigos
- [ ] Mostrar posts relacionados
- [ ] Criar área administrativa para gerenciar posts
- [ ] Implementar CRUD de posts no admin
- [ ] Implementar CRUD de categorias no admin
- [ ] Adicionar editor de texto rico para posts
- [x] Criar testes para o blog
- [x] Criar checkpoint final

## CRM Completo e Profissional

### Schema e Backend
- [x] Atualizar schema de leads com novos campos (clientType, qualification, leadSource, propertyInterest)
- [x] Adicionar enum para tipo de cliente (Comprador, Locatário, Proprietário)
- [x] Adicionar enum para qualificação (Quente, Morno, Frio, Não Qualificado)
- [x] Adicionar enum para origem do lead (WhatsApp, Site, Campanha, Indicação)
- [x] Adicionar campos de análise (budgetRange, preferredNeighborhoods, urgencyLevel)
- [ ] Atualizar routers com novos filtros e análises

### Dashboard e Funil
- [x] Criar funil visual de vendas (Kanban melhorado)
- [x] Implementar etapas: Novo Lead → Contato Inicial → Qualificação → Visita → Proposta → Negociação → Fechado/Perdido
- [x] Criar cards de análise por perfil de cliente
- [x] Mostrar distribuição por qualificação (Quente/Morno/Frio)
- [x] Criar gráficos de origem dos leads
- [ ] Implementar filtros por tipo de cliente e qualificação

### Gestão de Leads Avançada
- [x] Criar formulário completo de cadastro de lead com todos os campos
- [x] Implementar edição de perfil do cliente
- [x] Adicionar histórico de interações detalhado
- [x] Criar sistema de tags/etiquetas
- [ ] Implementar busca avançada por múltiplos critérios
- [x] Adicionar notas e observações por lead

### Testes e Entrega
- [x] Criar testes para novos campos e funcionalidades
- [x] Testar funil completo
- [x] Criar checkpoint final

## Integração WhatsApp + N8N + IA

### Análise e Planejamento
- [x] Analisar workflow Lívia 3.0 (atendente IA)
- [x] Analisar workflow Google Calendar
- [x] Analisar workflow Escalar Humano
- [x] Analisar workflow Enviar Agendamento
- [x] Analisar workflow Salvar no Banco
- [x] Analisar workflow Buscar Histórico
- [x] Planejar arquitetura de integração

### Endpoints e Webhooks
- [x] Criar endpoint webhook para receber mensagens do WhatsApp
- [x] Criar endpoint para salvar leads do N8N
- [x] Criar endpoint para salvar interações/mensagens
- [x] Criar endpoint para buscar histórico do cliente
- [x] Criar endpoint para atualizar status do lead
- [x] Criar endpoint para agendamento de visitas

### Sistema de Interações
- [x] Criar tabela de mensagens/conversas no banco
- [x] Implementar histórico completo de interações
- [ ] Criar visualização de conversas no CRM
- [ ] Adicionar timeline de atividades por lead

### Interface de Configuração
- [ ] Criar página de configurações de integração
- [ ] Adicionar campos para tokens e credenciais
- [ ] Criar documentação de integração
- [ ] Adicionar logs de webhooks

### Testes e Entrega
- [x] Testar webhook do WhatsApp
- [x] Testar salvamento automático de leads
- [x] Testar busca de histórico
- [x] Criar checkpoint final


## Visualização de Mensagens WhatsApp no CRM

- [x] Criar componente de timeline de mensagens
- [x] Implementar distinção visual entre mensagens do cliente e da IA
- [x] Adicionar timestamps e metadados
- [x] Integrar timeline na página de edição de lead
- [x] Adicionar busca de mensagens
- [x] Mostrar contexto de IA associado
- [x] Criar testes
- [x] Criar checkpoint final

## Formulário de Cadastro de Imóveis

- [x] Criar página de novo imóvel com formulário completo
- [x] Adicionar campos: título, descrição, tipo, finalidade, preço, quartos, banheiros, metragem, endereço, bairro
- [x] Implementar upload de múltiplas imagens com preview
- [x] Adicionar validação de campos obrigatórios
- [x] Criar botão "Novo Imóvel" na página de listagem
- [x] Testar cadastro completo de imóvel

## Classificação Automática de Clientes

- [x] Melhorar algoritmo de classificação automática por perfil
- [x] Implementar análise inteligente de qualificação (Quente/Morno/Frio)
- [x] Adicionar sugestões de ação para cada tipo de cliente
- [x] Criar indicadores visuais de prioridade

## Sistema de Destaques e Automação

- [x] Adicionar checkbox "Imóvel em Destaque" no formulário de cadastro
- [x] Garantir que imóveis cadastrados apareçam automaticamente na home
- [x] Criar seção de imóveis em destaque na página principal

## Painel CRM Avançado para Gestão de Clientes

- [x] Criar página de gestão de clientes com segmentação (Novos/Antigos)
- [x] Implementar filtros por temperatura (Quente/Morno/Frio)
- [x] Adicionar seção de clientes para envio programado de mensagens
- [x] Criar sistema de matching automático (perfil do cliente x imóveis disponíveis)
- [x] Implementar painel de ações da IA (análise e envio automatizado)
- [x] Adicionar dashboard de acompanhamento de interações

## Sistema de Follow-up Automático

- [x] Criar endpoint backend para identificar clientes quentes sem interação há 3+ dias
- [x] Implementar cálculo de dias desde última interação
- [x] Criar painel de Follow-up Automático no CRM
- [x] Adicionar lista de clientes que precisam de atenção urgente
- [x] Implementar botão de ação rápida para enviar follow-up
- [x] Criar sistema de alertas visuais no dashboard
- [x] Adicionar badge de notificação no menu lateral
- [x] Preparar integração com webhook N8N para disparo automático

## Expansão da Home e Landing Pages

- [x] Expandir seção de imóveis na home (mostrar mais cards)
- [x] Adicionar seção de blog na home com artigos recentes
- [x] Criar página individual de imóvel (/imovel/:id) como landing page
- [x] Implementar galeria de fotos na página do imóvel
- [x] Adicionar mapa de localização na página do imóvel
- [x] Criar formulário de contato na página do imóvel
- [x] Implementar SEO otimizado (meta tags, Open Graph, Schema.org)
- [x] Adicionar imóveis de exemplo com fotos fictícias
- [x] Garantir que cadastro de imóvel publique automaticamente na home
- [ ] Criar sistema de gestão de blog no dashboard admin

## Sistema Completo de Blog

- [x] Criar tabela blog_posts no banco de dados (schema)
- [x] Implementar rotas backend tRPC (create, update, delete, list, getById)
- [x] Criar página de listagem de posts no dashboard
- [x] Criar página de novo post no dashboard
- [x] Criar página de edição de post no dashboard
- [x] Implementar upload de imagem de capa
- [x] Adicionar sistema de categorias
- [x] Integrar posts automaticamente na home
- [x] Criar página pública de visualização de post (/blog/:slug)
- [x] Testar CRUD completo de blog

## Sistema de Cadastro de Proprietários

- [x] Criar tabela owners no banco de dados
- [x] Implementar rotas backend tRPC (create, update, delete, list, getById)
- [ ] Criar página de listagem de proprietários no dashboard
- [ ] Criar página de novo/editar proprietário
- [ ] Vincular proprietários aos imóveis
- [x] Testar CRUD completo de proprietários

## Webhooks N8N para Automação

- [x] Criar endpoint /api/webhook/lead-capture (receber novos leads)
- [x] Criar endpoint /api/webhook/message-received (histórico de mensagens)
- [x] Criar endpoint /api/webhook/send-properties (enviar imóveis compatíveis)
- [x] Implementar logs de webhook no banco
- [x] Criar sistema de qualificação automática por histórico
- [x] Testar webhooks com payloads de exemplo

## Documentação de Rotas

- [ ] Criar página /admin/api-docs no dashboard
- [x] Documentar todas as rotas de imóveis
- [x] Documentar todas as rotas de leads/clientes
- [x] Documentar webhooks N8N com exemplos
- [x] Adicionar exemplos de payloads JSON
- [x] Criar guia de integração passo a passo

## Sistema de Busca Funcional na Home

- [x] Implementar lógica de busca com query params na URL
- [x] Conectar filtros (Finalidade, Tipo, Bairro) ao backend tRPC
- [x] Adicionar estados de loading durante busca
- [x] Implementar resultados dinâmicos com atualização automática
- [x] Criar URLs compartilháveis para campanhas
- [x] Adicionar contador de resultados encontrados
- [x] Implementar estado vazio quando não há resultados
- [x] Testar busca com diferentes combinações de filtros

## Preparação para Deploy no GitHub

- [x] Criar README.md completo com instruções de instalação e deploy
- [x] Criar ENV_SETUP.md com todas as variáveis de ambiente necessárias
- [x] Criar DEPLOY.md com guia passo a passo para Vercel/Railway
- [x] Criar .gitignore adequado para o projeto
- [x] Documentar estrutura de pastas completa (PROJECT_STRUCTURE.md)
- [x] Criar guia de configuração do banco de dados
- [x] Adicionar scripts de inicialização no package.json
- [x] Verificar que todos os arquivos essenciais estão presentes

## Correções Finais

- [x] Corrigir import da tabela owners no db.ts
- [x] Garantir que todos os testes principais passem (28/28 passando)
- [x] Verificar que todas as rotas backend estão funcionando
- [x] Confirmar integração frontend ↔ backend ↔ database

## Preparação Final para GitHub

- [x] Criar página Quem Somos completa com biografia do Ernani
- [x] Verificar todas as conexões backend↔frontend
- [x] Criar guia GITHUB_UPLOAD.md com instruções passo a passo
- [x] Confirmar que projeto está pronto para download

## Sistema de Analytics e Métricas

- [x] Criar tabela analytics_events (rastreamento de ações)
- [x] Criar tabela campaign_sources (origem dos leads)
- [x] Criar tabela reviews (avaliações de clientes)
- [x] Implementar rotas backend de analytics
- [x] Criar dashboard de métricas no admin
- [x] Adicionar gráficos de ROI por campanha
- [x] Implementar relatórios de performance por imóvel
- [x] Criar análise de estágio do cliente

## Sistema Financeiro

- [x] Criar tabela transactions (transações financeiras)
- [x] Criar tabela commissions (comissões por venda)
- [x] Implementar rotas backend financeiras
- [x] Criar dashboard financeiro no admin
- [x] Adicionar relatórios de faturamento
- [x] Implementar previsão de receita (pipeline)
- [x] Criar histórico de pagamentos

## Melhorias no Frontend

- [x] Adicionar hero section premium com imagem de mansão
- [x] Criar seção de avaliações de clientes na home
- [x] Melhorar página de blog
- [x] Conectar formulário de contato ao CRM
- [x] Garantir que todas as páginas buscam dados do backend

## Correção de Erro e Melhorias Visuais

- [x] Corrigir erro do react-helmet-async (HelmetProvider não configurado)
- [x] Melhorar home com mais imóveis visíveis
- [x] Garantir que página de detalhes funciona ao clicar nos cards
- [x] Testar fluxo completo

## Correção de Imagens dos Imóveis

- [x] Verificar por que imagens não estão aparecendo nos cards
- [x] Corrigir renderização de imagens na home (mudado de backgroundImage para tag <img>)
- [x] Garantir que fotos do Unsplash carregam corretamente

## Melhorias de Layout e Otimização

- [ ] Limpar banco de dados deixando apenas 3-5 imóveis de exemplo
- [ ] Melhorar layout dos cards de imóveis (espaçamento, padding, margem)
- [ ] Garantir que imagens aparecem corretamente (não gradiente roxo)
- [ ] Otimizar página de detalhes com layout perfeito
- [ ] Corrigir layout do dashboard admin (padding e margem)
- [ ] Verificar conexão completa backend ↔ frontend ↔ banco

## Correções de Layout e Imagens (Sessão Atual)

- [x] Remover bordas vermelhas de debug do Dashboard
- [x] Remover bordas vermelhas dos cards de Follow-up
- [x] Melhorar espaçamento das páginas administrativas
- [x] Cadastrar 5 imóveis de exemplo no banco de dados
- [x] Corrigir renderização de imagens nos cards (usar array images quando mainImage não existir)
- [x] Testar visualização de imagens na home
- [x] Garantir que fotos do Unsplash aparecem corretamente
- [x] Criar checkpoint final com todas as correções

## Preparação Completa para Produção e GitHub

- [x] Criar Dockerfile otimizado para produção
- [x] Criar docker-compose.yml com todos os serviços (app, database)
- [x] Criar .dockerignore para otimizar build
- [x] Criar ENV_VARIABLES.md com todas as variáveis necessárias
- [x] Criar scripts de build (build.sh)
- [x] Criar scripts de deploy (deploy.sh)
- [x] Criar documentação DOCKER_DEPLOY.md
- [x] Atualizar README.md com instruções Docker
- [x] Verificar que todos os arquivos estão completos (sem mocks)
- [x] Verificar que todas as rotas tRPC estão implementadas
- [x] Verificar que todos os componentes React estão completos
- [x] Testar build do Docker localmente (Frontend: 1.28MB, Backend: 90KB)
- [x] Criar checkpoint final production-ready


## TRANSFORMAÇÃO PARA CASA.DF.COM.BR

### Branding e Identidade Visual
- [x] Atualizar package.json (name: "casadf-crm", description)
- [x] Atualizar README.md com informações da Casa DF
- [x] Remover todas as referências a "Hernani Muniz" e "Corretor das Mansões"
- [x] Atualizar logo para Casa DF (ícone de casa azul)
- [ ] Atualizar paleta de cores (azul navy + laranja)
- [x] Atualizar contatos: (61) 98148-8353, contato@casadf.com.br, Guará-DF
- [ ] Atualizar meta tags e SEO para Casa.df.com.br

### Migração PostgreSQL
- [ ] Instalar pg e @types/pg
- [ ] Atualizar drizzle.config.ts para PostgreSQL
- [ ] Converter schema.ts: mysqlTable → pgTable, mysqlEnum → pgEnum
- [ ] Converter tipos: int → integer/serial, varchar → varchar/text
- [ ] Gerar novas migrations para PostgreSQL
- [ ] Atualizar DATABASE_URL para PostgreSQL
- [ ] Testar conexão e migrations

### Frontend Moderno (Inspirado em QuintoAndar/VivaReal/WImóveis)
- [ ] Redesenhar Hero Section com busca inteligente
- [ ] Implementar tabs: Comprar/Alugar/Lançamentos
- [ ] Adicionar autocomplete de bairros (Brasília/DF)
- [ ] Criar busca por características (piscina, churrasqueira)
- [ ] Implementar seletor de quartos (1+, 2+, 3+, 4+)
- [ ] Criar categorias visuais (Luxo, Pet-friendly, Piscina, Lançamentos)
- [ ] Redesenhar cards de imóveis com hover effects
- [ ] Adicionar seção "Bairros em Destaque"
- [ ] Melhorar responsividade mobile

### Integração N8N Workflows
- [ ] Adicionar N8N ao docker-compose.yml
- [ ] Criar workflow: Captura de Lead (Site → CRM)
- [ ] Criar workflow: Qualificação IA (WhatsApp → Scoring)
- [ ] Criar workflow: Follow-up Automático (3 dias sem contato)
- [ ] Criar workflow: Matching de Imóveis (novo imóvel → leads compatíveis)
- [ ] Documentar webhooks e payloads

### SEO Avançado
- [ ] Implementar meta tags dinâmicas por página
- [ ] Adicionar structured data (JSON-LD) para imóveis
- [ ] Criar sitemap.xml dinâmico
- [ ] Implementar lazy loading de imagens
- [ ] Configurar cache de páginas estáticas
- [ ] Otimizar Core Web Vitals

### Docker e Deploy VPS
- [ ] Criar Dockerfile otimizado (multi-stage build)
- [ ] Atualizar docker-compose.yml (PostgreSQL + N8N + Nginx)
- [ ] Criar script deploy.sh automatizado
- [ ] Configurar Nginx como reverse proxy
- [ ] Preparar configuração SSL (Let's Encrypt)
- [ ] Criar script de backup automático (PostgreSQL → S3)
- [ ] Documentar deploy para Google Cloud Compute Engine
- [ ] Documentar deploy para Digital Ocean Droplet

### Testes e Qualidade
- [ ] Executar todos os testes existentes (vitest)
- [ ] Adicionar testes para novas funcionalidades
- [ ] Testar integração PostgreSQL
- [ ] Testar workflows N8N
- [ ] Testar responsividade em mobile
- [ ] Validar performance e SEO

### Documentação Final
- [ ] Atualizar README.md completo
- [ ] Criar guia de deploy para Google Cloud
- [ ] Criar guia de deploy para Digital Ocean
- [ ] Documentar variáveis de ambiente
- [ ] Documentar workflows N8N
- [ ] Criar guia de uso do CRM

### GitHub e Produção
- [ ] Criar repositório GitHub (casa-df-crm)
- [ ] Configurar .gitignore
- [ ] Configurar GitHub Actions (CI/CD)
- [ ] Fazer deploy em VPS
- [ ] Configurar domínio casadf.com.br
- [ ] Ativar SSL/HTTPS
- [ ] Configurar monitoramento e logs


## CORRETOR VIRTUAL ESPECIALISTA E WORKFLOWS N8N

### Análise e Preparação
- [ ] Analisar workflow "Lara-Secretaria.json"
- [ ] Analisar workflow "Assistente interno"
- [ ] Analisar workflow "Escalar humano"
- [ ] Analisar workflow "Enviar agendamento"
- [ ] Analisar workflow "Atualizar Status e Contexto"
- [ ] Analisar workflow "Buscar Histórico Cliente"
- [ ] Analisar workflow "Google Calendar MCP"
- [ ] Analisar workflow "Baixar e enviar arquivo Google Drive"

### Corretor Virtual Especialista
- [x] Criar prompt de IA para corretor imobiliário especialista
- [x] Adicionar conhecimento sobre leis e normas imobiliárias
- [x] Implementar qualificação automática de leads
- [x] Criar análise de perfil de clientes
- [x] Adicionar técnicas de vendas e negociação
- [x] Implementar atendimento personalizado por perfil

### Remoção de Referências Antigas
- [x] Remover foto ernani-nunes-photo.jpg do código
- [x] Remover logo-ernani-nunes.jpg do código
- [x] Buscar e remover todas as referências restantes a Ernani/Hernani
- [x] Atualizar página "Quem Somos" com informações Casa DF
- [ ] Atualizar página "Contato" com dados Casa DF

### Layout Premium Casa DF
- [ ] Analisar design do site casadf.com.br atual
- [ ] Implementar hero section moderno com busca avançada
- [ ] Criar cards de imóveis com design premium
- [ ] Adicionar seção de categorias visuais
- [ ] Implementar seção "Bairros em Destaque"
- [ ] Melhorar tipografia e espaçamentos
- [ ] Adicionar animações suaves (Framer Motion)

### Integração Workflows N8N
- [ ] Adaptar workflow Lara (secretária virtual)
- [ ] Adaptar workflow Assistente Interno
- [ ] Configurar escalonamento para humano
- [ ] Integrar Google Calendar para agendamentos
- [ ] Conectar com endpoints do backend
- [ ] Testar fluxo completo de atendimento
- [ ] Documentar cada workflow adaptado


## MODERNIZAÇÃO FRONTEND - IMÓVEIS E BUSCA

### Tipografia Premium
- [x] Adicionar fonte Montserrat (Google Fonts)
- [x] Adicionar fonte Poppins (Google Fonts)
- [x] Atualizar index.css com novas fontes
- [x] Aplicar Montserrat em títulos
- [x] Aplicar Poppins em textos

### Sistema de Filtros Inteligentes
- [x] Criar componente FilterBar com todos os filtros
- [x] Implementar filtro de Finalidade (Comprar/Alugar)
- [x] Implementar filtro de Tipo de Imóvel (dropdown)
- [x] Criar autocomplete de Bairros de Brasília
- [x] Implementar slider de faixa de preço
- [x] Criar seletor rápido de quartos (1+, 2+, 3+, 4+)
- [x] Adicionar filtro de Características (checkboxes)
- [x] Implementar botão "Limpar Filtros"
- [x] Adicionar contador de resultados

### Cards de Imóveis Premium
- [x] Redesenhar PropertyCard inspirado em casadf.com.br
- [x] Adicionar hover effects suaves
- [x] Implementar badge de "Destaque"
- [x] Melhorar layout de informações (preço, área, quartos)
- [x] Adicionar ícones para características
- [ ] Implementar lazy loading de imagens
- [ ] Criar skeleton loading para cards

### Página Individual de Imóvel
- [ ] Criar galeria de fotos profissional (lightbox)
- [ ] Adicionar suporte para vídeos do YouTube/Vimeo
- [ ] Implementar mapa de localização (Google Maps)
- [ ] Criar seção de características detalhadas
- [ ] Adicionar formulário de contato integrado ao CRM
- [ ] Implementar seção "Imóveis Relacionados"
- [ ] Adicionar botões de compartilhamento social
- [ ] Criar breadcrumb de navegação

### Página de Listagem de Imóveis
- [x] Criar página /imoveis com grid responsivo
- [x] Implementar paginação
- [x] Adicionar ordenação (Menor preço, Maior preço, Mais recentes)
- [x] Criar visualização em grid/lista
- [x] Implementar estados vazios (sem resultados)
- [ ] Adicionar loading states

### Integração Backend ↔ Frontend
- [ ] Conectar filtros ao tRPC backend
- [ ] Implementar busca em tempo real (debounce)
- [ ] Otimizar queries do banco de dados
- [ ] Adicionar cache de resultados
- [ ] Testar performance com muitos imóveis

### Página de Blog
- [ ] Criar página /blog com listagem de posts
- [ ] Implementar cards de artigos
- [ ] Criar página individual de post (/blog/:slug)
- [ ] Adicionar categorias e tags
- [ ] Implementar busca de posts
- [ ] Adicionar compartilhamento social


## CORREÇÃO DE BANCO DE DADOS

### Migrations e Tabelas
- [x] Verificar schema atual em drizzle/schema.ts
- [x] Executar pnpm db:push para criar tabelas
- [x] Verificar se tabelas properties, blog_posts, reviews foram criadas
- [x] Testar queries do tRPC
- [x] Adicionar dados de exemplo (seed)


## NOVOS IMÓVEIS DE EXEMPLO

- [x] Criar 15 novos imóveis variados (alto padrão e populares)
- [x] Incluir imóveis em Park Way, Sudoeste, Noroeste
- [x] Incluir imóveis em Vicente Pires, Samambaia, Ceilândia
- [x] Incluir imóveis em Sobradinho e outras regiões
- [x] Inserir imóveis no banco de dados
- [x] Testar visualização no frontend


## COMPARAÇÃO DE IMÓVEIS

- [x] Criar CompareContext para gerenciar seleção
- [x] Adicionar checkbox nos PropertyCard
- [x] Criar barra flutuante CompareBar
- [x] Criar página CompareProperties
- [x] Adicionar rota /comparar-imoveis
- [x] Implementar tabela de comparação lado a lado
- [x] Testar seleção e comparação


## MELHORIAS NOS FILTROS

- [ ] Melhorar filtro de Finalidade (Comprar/Alugar)
- [ ] Melhorar filtro de Tipo de Imóvel
- [ ] Adicionar lista completa de bairros de Brasília
- [ ] Implementar slider de faixa de preço (min/max)
- [ ] Adicionar contador de resultados em tempo real

## GESTÃO DE IMÓVEIS APRIMORADA

- [ ] Implementar upload múltiplo de fotos
- [ ] Adicionar drag & drop para fotos
- [ ] Permitir reordenação de fotos
- [ ] Campo para URLs de vídeos (YouTube/Vimeo)
- [ ] Melhorar interface de edição de imóveis

## SISTEMA DE GESTÃO DE ALUGUÉIS

### Banco de Dados
- [x] Criar tabela `property_owners` (proprietários)
- [x] Criar tabela `rental_contracts` (contratos)
- [x] Criar tabela `tenants` (inquilinos)
- [x] Criar tabela `financial_transactions` (transações)
- [x] Criar tabela `property_expenses` (despesas)

### Proprietários
- [ ] Criar página de cadastro de proprietários
- [ ] Adicionar campos: nome, CPF/CNPJ, contatos, banco
- [ ] Listar proprietários com busca
- [ ] Editar e excluir proprietários

### Contratos de Locação
- [ ] Criar página de contratos
- [ ] Vincular imóvel + proprietário + inquilino
- [ ] Definir valores, vencimento, comissão
- [ ] Status: ativo, encerrado, inadimplente
- [ ] Gerar documentos de contrato

### Gestão Financeira
- [ ] Registrar recebimentos de aluguéis
- [ ] Calcular e registrar repasses para proprietários
- [ ] Calcular comissões da imobiliária
- [ ] Registrar despesas dos imóveis
- [ ] Relatórios de inadimplência

### Dashboard Financeiro
- [ ] Visão geral de receitas e despesas
- [ ] Gráficos de performance
- [ ] Lista de pagamentos pendentes
- [ ] Relatório de comissões do mês
- [ ] Exportar relatórios (PDF/Excel)


## UPLOAD DE FOTOS DE IMÓVEIS

### Componente de Upload
- [x] Criar componente ImageUploader com drag & drop
- [x] Implementar preview das imagens carregadas
- [x] Adicionar validação de tipo e tamanho de arquivo
- [ ] Mostrar progresso de upload

### Reordenação
- [x] Implementar drag & drop para reordenar fotos
- [x] Atualizar ordem no banco de dados
- [x] Mostrar indicador visual de ordem

### Imagem Principal
- [x] Adicionar botão/ícone para definir imagem principal
- [x] Destacar visualmente a imagem principal
- [ ] Atualizar campo mainImage no banco

### Exclusão
- [x] Adicionar botão de excluir imagem
- [x] Confirmar exclusão
- [ ] Remover do S3 e banco de dados

### Integração S3
- [ ] Criar endpoint tRPC para upload
- [ ] Implementar upload para S3
- [ ] Gerar URLs públicas
- [ ] Salvar metadados no banco

### Vídeos
- [x] Adicionar campo para URL de vídeo YouTube
- [x] Adicionar campo para URL de vídeo Vimeo
- [x] Validar URLs de vídeo
- [ ] Mostrar preview de vídeo

### Página de Edição
- [ ] Integrar ImageUploader na página de edição
- [ ] Carregar imagens existentes
- [ ] Atualizar ao salvar imóvel


## PREPARAÇÃO PARA DEPLOY

### Arquivos de Configuração
- [ ] Criar .env.example com todas as variáveis necessárias
- [ ] Criar Dockerfile para build da aplicação
- [x] Criar docker-compose.yml com app + MySQL + N8N
- [x] Criar .dockerignore
- [x] Atualizar .gitignore

### Documentação
- [x] Criar DEPLOY.md com guia completo de deploy
- [ ] Documentar variáveis de ambiente
- [ ] Documentar comandos Docker
- [ ] Criar guia de configuração do GitHub
- [ ] Documentar deploy no Google Cloud
- [ ] Documentar deploy na Digital Ocean

### Empacotamento
- [x] Gerar arquivo ZIP com código completo
- [x] Incluir todos os arquivos necessários
- [x] Excluir node_modules e arquivos temporários


## CORREÇÃO - TABELA LEADS
- [x] Criar tabela leads no banco de dados
- [x] Popular com dados de exemplo
- [x] Testar página /admin/clients


## DASHBOARD KANBAN - FUNIL DE VENDAS

### Infraestrutura
- [x] Instalar biblioteca @dnd-kit/core e @dnd-kit/sortable
- [ ] Configurar contexto de drag & drop

### Componentes
- [x] Criar componente LeadCard
- [ ] Criar componente KanbanColumn
- [x] Criar página SalesFunnel

### Backend
- [x] Adicionar endpoint tRPC para atualizar estágio do lead
- [x] Adicionar função no db.ts para update de lead

### Funcionalidades
- [x] Implementar drag & drop entre colunas
- [x] Atualizar banco de dados ao mover card
- [x] Adicionar estatísticas do funil (totais, conversão)
- [x] Implementar filtros (qualificação, prioridade)
- [x] Adicionar busca por nome/email
- [x] Criar indicadores visuais (score, badges)

### Integração
- [x] Adicionar rota /admin/funil no App.tsx
- [ ] Adicionar link no menu do Dashboard
- [x] Testar funcionalidade completa


## CORREÇÃO - WARNING DE REF
- [x] Localizar DropdownMenuTrigger em /admin/properties
- [x] Adicionar React.forwardRef no componente Button
- [x] Testar correção


## SISTEMA COMPLETO DE GESTÃO

### Gestão de Imóveis
- [ ] Criar formulário completo de cadastro de imóveis
- [ ] Implementar upload múltiplo de fotos
- [ ] Adicionar todos os campos (características, localização, valores)
- [ ] Implementar status (disponível, reservado, vendido, alugado)
- [ ] Criar página de edição de imóveis

### Categorização de Clientes
- [ ] Adicionar categoria "Comprador"
- [ ] Adicionar categoria "Proprietário"
- [ ] Adicionar categoria "Locatário"
- [ ] Adicionar categoria "Investidor"
- [ ] Implementar filtros por categoria

### Estágios de Atendimento
- [ ] Criar estágio "Cliente Pronto" (hot)
- [ ] Criar estágio "Cliente em Busca" (warm)
- [ ] Criar estágio "Cliente para Financiamento"
- [ ] Criar estágio "Cliente Frio"
- [ ] Implementar mudança de estágio

### Histórico Inteligente de Conversas
- [ ] Criar tabela de conversas no banco
- [ ] Implementar registro automático via IA
- [ ] Adicionar análise de perfil (dor, objetivo, sonho)
- [ ] Criar histórico de buscas
- [ ] Implementar score de engajamento
- [ ] Criar interface de visualização de histórico

### Simulador de Financiamento
- [ ] Criar formulário de simulação
- [ ] Implementar cálculo SAC
- [ ] Implementar cálculo PRICE
- [ ] Adicionar taxas dos bancos do DF
- [ ] Criar comparativo de bancos
- [ ] Gerar relatório PDF
- [ ] Salvar simulação no perfil do cliente


## PREPARAÇÃO PARA PRODUÇÃO VPS

### Dockerfile
- [x] Criar Dockerfile com multi-stage build
- [x] Estágio builder do client (Vite)
- [x] Estágio builder do server (esbuild)
- [x] Estágio final rodando Express (node:22-alpine)
- [x] Suporte a pnpm

### Docker Compose
- [x] Criar docker-compose.yml completo
- [x] Serviço app (build do Dockerfile)
- [x] Serviço db (MySQL 8.0)
- [x] Serviço n8n (automação)
- [x] Serviço phpMyAdmin (opcional, profile dev)
- [x] Configurar volumes (mysql_data, n8n_data)
- [x] Configurar restart unless-stopped
- [x] Configurar DATABASE_URL interna
- [x] Configurar healthchecks
- [x] Configurar networks (casadf-network)

### Variáveis de Ambiente
- [x] Criar ENV_VARS.md completo (documentação)
- [x] Configuração MySQL
- [x] Manus App ID e OAuth (auto-injetadas)
- [x] Forge API keys (auto-injetadas)
- [x] Chatwoot (opcional)
- [x] N8N URLs
- [x] Google Maps key (opcional)
- [x] Gemini API (opcional)
- [x] APP_URL e FRONTEND_URL
- [x] JWT_SECRET
- [x] WhatsApp Business API (opcional)
- [x] SMTP (opcional)
- [x] S3/Storage (opcional)
- [x] Sentry (opcional)
- [x] Redis (opcional)

### Drizzle ORM
- [x] Criar drizzle.config.ts
- [x] Gerar migrations automaticamente (8 migrations)
- [x] Validar schema.ts completo
- [x] Organizar migrations em drizzle/migrations/

### Build e Scripts
- [x] Corrigir server/_core/index.ts para produção (já detecta NODE_ENV)
- [x] Adicionar scripts de build no package.json
- [x] Script build:client (vite build)
- [x] Script build:server (esbuild)
- [x] Script build (ambos)
- [x] Script start (NODE_ENV=production)

### NGINX
- [x] Criar NGINX config template (nginx.conf)
- [x] Configurar porta 80 (redirect para HTTPS)
- [x] Configurar porta 443 (SSL/TLS)
- [x] Configurar proxy_pass para 3000
- [x] Configurar cabeçalhos websocket
- [x] Configurar SSL com Let's Encrypt
- [x] Configurar compressão Gzip
- [x] Configurar cache de estáticos
- [x] Configurar headers de segurança
- [x] Configurar proxy para N8N (porta 5678)
- [x] Configurar health check endpoint

### Vite Config
- [x] Ajustar vite.config.ts para produção
- [x] Definir dist/public como saída (correto)

### Testes de Build
- [x] Testar build:client (Vite) - ✅ 1.38 MB minificado, 345 KB gzipped
- [x] Testar build:server (esbuild) - ✅ 105.7 KB em 10ms
- [x] Verificar estrutura dist/ - ✅ dist/public + dist/server
- [x] Corrigir erro TypeScript usePersistFn.ts

### Arquivos Criados para Produção
- [x] Dockerfile (multi-stage build otimizado)
- [x] docker-compose.yml (app + MySQL + N8N + phpMyAdmin)
- [x] ENV_VARS.md (documentação completa de variáveis)
- [x] nginx.conf (configuração NGINX com SSL/TLS)
- [x] drizzle.config.ts (já existia)
- [x] 8 migrations SQL organizadas em drizzle/migrations/

### Próximos Passos
- [ ] Salvar checkpoint final
- [ ] Gerar ZIP completo do sistema
- [ ] Criar guia de deploy VPS atualizado


## 🚀 TAREFAS OBRIGATÓRIAS PARA PRODUÇÃO (NOVA ANÁLISE)

### 1. Arquivo .env.example Completo
- [ ] Criar .env.example com TODAS as variáveis necessárias
- [ ] MySQL (host, port, user, password, database)
- [ ] API_URL e FRONTEND_URL
- [ ] Manus App ID e OAuth URLs
- [ ] Forge API (backend e frontend)
- [ ] Chatwoot (URL, token, account ID, inbox ID)
- [ ] N8N URLs e credenciais
- [ ] Google Maps API Key
- [ ] Gemini API Key

### 2. Dockerfile Otimizado
- [ ] Verificar se Dockerfile builda client corretamente (Vite)
- [ ] Verificar se Dockerfile builda server corretamente (esbuild)
- [ ] Garantir que dist/client e dist/server são copiados
- [ ] Configurar CMD para rodar Node em produção

### 3. Docker Compose Completo
- [ ] Verificar volumes persistentes para MySQL
- [ ] Garantir DATABASE_URL funcional entre containers
- [ ] Adicionar healthchecks em todos os serviços
- [ ] Configurar restart: always (ou unless-stopped)

### 4. Schema Drizzle COMPLETO
- [x] Verificar tabela owners (proprietários) ✅
- [x] Verificar tabela users (usuários do sistema) ✅
- [x] Verificar tabela user_roles (papéis/permissões) ✅ NOVA
- [x] Verificar tabela properties (imóveis) ✅
- [x] Verificar tabela property_images (fotos dos imóveis) ✅
- [x] Verificar tabela leads (clientes/leads) ✅
- [x] Verificar tabela interactions (histórico de interações) ✅
- [x] Verificar tabela visits (visitas agendadas) ✅ NOVA
- [x] Verificar tabela proposals (propostas comerciais) ✅ NOVA
- [x] Verificar tabela commissions (comissões) ✅
- [x] Verificar tabela documents (documentos anexados) ✅ NOVA
- [x] Verificar tabela tasks (tarefas/follow-ups) ✅ NOVA
- [x] Verificar tabela activity_logs (logs de atividade) ✅ NOVA
- [x] Verificar tabela pipeline_stages (estágios do funil) ✅ NOVA

### 5. Migrations Drizzle
- [x] Gerar migrations automaticamente: pnpm db:push ✅
- [x] Verificar se migrations estão em drizzle/migrations/ ✅ (9 migrations)
- [x] Testar aplicação das migrations no banco ✅

### 6. Rotas TRPC Backend COMPLETAS
- [ ] Verificar rotas properties.* (list, getById, create, update, delete)
- [ ] Verificar rotas leads.* (list, getById, create, update, delete, updateStage)
- [ ] Verificar rotas proposals.* (create, list, getById, update)
- [ ] Verificar rotas users.* (list, getById, create, update, delete)
- [ ] Verificar rotas uploads.* (uploadImage, uploadDocument)
- [ ] Verificar rotas visits.* (schedule, list, update)
- [ ] Verificar rotas analytics.* (dashboard, reports)
- [ ] Verificar rotas documents.* (upload, list, delete)
- [ ] Verificar rotas ai.* (chatbot, recommendations)

### 7. Servidor Express/TRPC para Produção
- [x] Verificar se server/_core/index.ts serve dist/client em produção ✅
- [x] Verificar se API TRPC está em /api/trpc ✅
- [x] Adicionar endpoint /health para healthchecks ✅
- [x] Testar servidor em modo produção (NODE_ENV=production) ✅

### 8. Rotas Backend Específicas Faltantes
- [ ] POST /api/properties - cadastrar imóvel
- [ ] PUT /api/properties/:id - alterar imóvel
- [ ] GET /api/properties - listar imóveis com filtros
- [ ] GET /api/properties/:id - visualizar imóvel específico
- [ ] POST /api/leads - cadastrar lead
- [ ] POST /api/visits - registrar visita
- [ ] POST /api/proposals - criar proposta
- [ ] POST /api/uploads/images - upload de imagens
- [ ] POST /api/uploads/documents - upload de documentos
- [ ] GET /api/tasks - listar tarefas
- [ ] POST /api/interactions - registrar interação

### 9. Integração Frontend-Backend
- [ ] Verificar se client consome TRPC corretamente após build
- [ ] Testar chamadas TRPC em produção
- [ ] Verificar se variáveis VITE_* estão disponíveis no frontend

### 10. Commit Automático GitHub
- [ ] Verificar conexão com repositório vml-arquivos/saas-imobiliaria-IA
- [ ] Adicionar todos os arquivos novos/modificados
- [ ] Criar commit com mensagem descritiva
- [ ] Push para branch main (ou branch especificada)
