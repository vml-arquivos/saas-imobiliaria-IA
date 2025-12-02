# 🔄 Integração N8N - Casa DF Imóveis

## Visão Geral

Este documento descreve como integrar os workflows N8N com o sistema Casa DF CRM. Os workflows automatizam todo o processo de atendimento, desde a captura inicial do lead até o agendamento de visitas e follow-up automático.

---

## Arquitetura da Integração

```
WhatsApp → N8N → Sistema Casa DF CRM → Banco de Dados PostgreSQL
                      ↓
                Google Calendar (Agendamentos)
```

### Fluxo Completo:
1. **Cliente envia mensagem** via WhatsApp
2. **N8N recebe** via webhook e processa
3. **Corretor Virtual (Alex)** responde automaticamente
4. **Sistema CRM** armazena lead e interações
5. **Qualificação automática** classifica o lead (Quente/Morno/Frio)
6. **Agendamento** sincroniza com Google Calendar
7. **Escalonamento** para corretor humano quando necessário

---

## Endpoints do Backend

### 1. Webhook: Receber Mensagens WhatsApp
**Endpoint:** `POST /api/webhook/whatsapp`

**Payload:**
```json
{
  "telefone": "5561981488353",
  "nome": "João Silva",
  "mensagem": "Olá, gostaria de informações sobre apartamentos",
  "tipo": "incoming",
  "timestamp": 1699999999,
  "id_mensagem": "msg_123456"
}
```

**Resposta:**
```json
{
  "success": true,
  "lead_id": 123,
  "mensagem_salva": true
}
```

### 2. Webhook: Salvar Lead
**Endpoint:** `POST /api/webhook/lead-capture`

**Payload:**
```json
{
  "nome": "João Silva",
  "telefone": "5561981488353",
  "email": "joao@email.com",
  "tipo_transacao": "compra",
  "orcamento": "500000",
  "regiao_preferida": "Águas Claras",
  "quartos": 3,
  "urgencia": "médio_prazo",
  "origem": "WhatsApp"
}
```

**Resposta:**
```json
{
  "success": true,
  "lead_id": 123,
  "score": 65,
  "qualificacao": "Morno"
}
```

### 3. Webhook: Buscar Histórico do Cliente
**Endpoint:** `GET /api/webhook/historico/:telefone`

**Resposta:**
```json
{
  "lead": {
    "id": 123,
    "nome": "João Silva",
    "telefone": "5561981488353",
    "score": 65,
    "qualificacao": "Morno",
    "perfil": "Primeira Casa"
  },
  "mensagens": [
    {
      "id": 1,
      "mensagem": "Olá, gostaria de informações",
      "tipo": "incoming",
      "timestamp": "2024-11-30T18:00:00Z"
    },
    {
      "id": 2,
      "mensagem": "Olá! Sou o Alex, corretor virtual...",
      "tipo": "outgoing",
      "timestamp": "2024-11-30T18:00:05Z"
    }
  ],
  "interacoes": [
    {
      "id": 1,
      "tipo": "WhatsApp",
      "descricao": "Primeiro contato",
      "data": "2024-11-30T18:00:00Z"
    }
  ]
}
```

### 4. Webhook: Atualizar Status do Lead
**Endpoint:** `PATCH /api/webhook/lead/:id/status`

**Payload:**
```json
{
  "status": "Contato Inicial",
  "score": 75,
  "qualificacao": "Quente",
  "observacoes": "Cliente demonstrou urgência, orçamento compatível"
}
```

### 5. Webhook: Agendar Visita
**Endpoint:** `POST /api/webhook/agendar-visita`

**Payload:**
```json
{
  "lead_id": 123,
  "imovel_id": 456,
  "data_hora": "2024-12-05T14:00:00Z",
  "observacoes": "Cliente prefere tarde",
  "google_calendar_event_id": "evt_123abc"
}
```

---

## Workflows N8N

### Workflow 1: Lara - Secretária Virtual

**Arquivo:** `Lara-Secretaria.json`

**Função:** Atendimento inicial automatizado via WhatsApp

**Fluxo:**
1. Recebe mensagem via webhook
2. Verifica se é mensagem nova (incoming)
3. Busca histórico do cliente no CRM
4. Envia para corretor virtual (Alex) processar
5. Salva resposta no banco de dados
6. Envia mensagem de volta via WhatsApp

**Configurações Necessárias:**
- Webhook URL: `https://seu-dominio.com/api/webhook/whatsapp`
- Conexão com banco PostgreSQL (fila de mensagens)
- Integração WhatsApp Business API

**Prompt do Corretor Virtual:**
Use o arquivo `CORRETOR_VIRTUAL_PROMPT.md` como system prompt na chamada de IA.

---

### Workflow 2: Assistente Interno

**Arquivo:** `6-Assistenteinterno.json`

**Função:** Processamento inteligente de mensagens e qualificação de leads

**Fluxo:**
1. Recebe contexto da conversa
2. Analisa intenção do cliente
3. Extrai informações (orçamento, região, quartos, urgência)
4. Calcula score de qualificação (0-100)
5. Classifica lead (Quente/Morno/Frio)
6. Atualiza CRM com dados extraídos
7. Decide próxima ação (continuar conversa, agendar visita, escalar)

**Variáveis de Ambiente:**
```env
OPENAI_API_KEY=sk-...
CASA_DF_API_URL=https://seu-dominio.com/api
CASA_DF_API_TOKEN=seu-token-secreto
```

---

### Workflow 3: Escalar para Humano

**Arquivo:** `4-Escalarhumano.json`

**Função:** Transferir atendimento para corretor humano

**Triggers:**
- Cliente solicita falar com corretor
- Após 3 tentativas sem sucesso de qualificação
- Cliente demonstra insatisfação
- Negociação de valores
- Dúvidas jurídicas complexas

**Ações:**
1. Marca lead como "Aguardando Atendimento Humano"
2. Envia notificação para corretor via email/SMS
3. Registra motivo do escalonamento
4. Envia mensagem ao cliente: "Vou te conectar com um corretor especializado..."

---

### Workflow 4: Agendamento de Visitas

**Arquivo:** `5-Enviaragendamento.json`

**Função:** Criar agendamentos no Google Calendar e CRM

**Fluxo:**
1. Cliente confirma interesse em visitar imóvel
2. Corretor virtual oferece horários disponíveis
3. Cliente escolhe data/hora
4. Cria evento no Google Calendar
5. Salva agendamento no CRM
6. Envia confirmação via WhatsApp com:
   - Data e hora
   - Endereço do imóvel
   - Nome do corretor responsável
   - Link do Google Maps

**Integração Google Calendar:**
- Usa MCP (Model Context Protocol) para autenticação
- Arquivo: `##2.MCPGoogleCalendar(1).json`
- Sincronização bidirecional

---

### Workflow 5: Atualizar Status e Contexto

**Arquivo:** `7-AtualizarStatuseContexto(1).json`

**Função:** Manter contexto da conversa e atualizar status do lead

**Ações:**
1. Salva cada mensagem no buffer de contexto
2. Atualiza última interação do lead
3. Recalcula score baseado em engajamento
4. Atualiza status no funil de vendas
5. Registra preferências identificadas

---

### Workflow 6: Buscar Histórico do Cliente

**Arquivo:** `8-BuscarHistoricoCliente.json`

**Função:** Recuperar histórico completo de interações

**Retorna:**
- Dados cadastrais do lead
- Histórico de mensagens (últimas 50)
- Imóveis visualizados
- Visitas agendadas
- Score e qualificação atual
- Preferências identificadas

---

### Workflow 7: Baixar e Enviar Arquivo Google Drive

**Arquivo:** `3-BaixareenviararquivodoGoogleDrive.json`

**Função:** Compartilhar documentos, plantas, fotos de imóveis

**Uso:**
- Cliente solicita planta do imóvel
- Envio de contrato para assinatura
- Compartilhamento de fotos adicionais

---

## Configuração do N8N

### 1. Instalação via Docker

Adicione ao `docker-compose.yml`:

```yaml
n8n:
  image: n8nio/n8n:latest
  container_name: casadf_n8n
  restart: unless-stopped
  ports:
    - "5678:5678"
  environment:
    - N8N_BASIC_AUTH_ACTIVE=true
    - N8N_BASIC_AUTH_USER=admin
    - N8N_BASIC_AUTH_PASSWORD=${N8N_PASSWORD}
    - N8N_HOST=n8n.casadf.com.br
    - N8N_PROTOCOL=https
    - WEBHOOK_URL=https://n8n.casadf.com.br/
    - GENERIC_TIMEZONE=America/Sao_Paulo
  volumes:
    - n8n_data:/home/node/.n8n
  depends_on:
    - postgres

volumes:
  n8n_data:
```

### 2. Variáveis de Ambiente

Crie arquivo `.env.n8n`:

```env
# N8N
N8N_PASSWORD=senha-segura-aqui

# Casa DF API
CASA_DF_API_URL=https://casadf.com.br/api
CASA_DF_API_TOKEN=token-secreto-aqui

# OpenAI (para corretor virtual)
OPENAI_API_KEY=sk-...

# WhatsApp Business API
WHATSAPP_API_URL=https://api.whatsapp.com
WHATSAPP_API_TOKEN=...

# Google Calendar
GOOGLE_CLIENT_ID=...
GOOGLE_CLIENT_SECRET=...
GOOGLE_REFRESH_TOKEN=...
```

### 3. Importar Workflows

1. Acesse N8N: `https://n8n.casadf.com.br`
2. Login com credenciais configuradas
3. Vá em **Workflows** → **Import from File**
4. Importe cada arquivo `.json` da pasta `n8n-workflows/`
5. Configure credenciais em cada workflow:
   - PostgreSQL Connection
   - OpenAI API
   - WhatsApp API
   - Google Calendar

### 4. Ativar Workflows

Após importar e configurar, ative cada workflow clicando em **Active**.

---

## Testes de Integração

### Teste 1: Captura de Lead via WhatsApp

```bash
curl -X POST https://casadf.com.br/api/webhook/whatsapp \
  -H "Content-Type: application/json" \
  -d '{
    "telefone": "5561999999999",
    "nome": "Teste Cliente",
    "mensagem": "Olá, quero comprar um apartamento",
    "tipo": "incoming",
    "timestamp": 1699999999,
    "id_mensagem": "test_001"
  }'
```

**Resultado Esperado:**
- Lead criado no CRM
- Mensagem salva no banco
- Resposta automática do corretor virtual
- Score calculado automaticamente

### Teste 2: Buscar Histórico

```bash
curl https://casadf.com.br/api/webhook/historico/5561999999999
```

**Resultado Esperado:**
- JSON com dados do lead
- Histórico de mensagens
- Interações registradas

### Teste 3: Agendamento de Visita

```bash
curl -X POST https://casadf.com.br/api/webhook/agendar-visita \
  -H "Content-Type: application/json" \
  -d '{
    "lead_id": 123,
    "imovel_id": 456,
    "data_hora": "2024-12-05T14:00:00Z",
    "observacoes": "Cliente prefere tarde"
  }'
```

**Resultado Esperado:**
- Evento criado no Google Calendar
- Agendamento salvo no CRM
- Confirmação enviada via WhatsApp

---

## Monitoramento e Logs

### Logs do N8N

Acesse: `https://n8n.casadf.com.br/workflows` → Selecione workflow → **Executions**

### Logs do Backend

```bash
docker logs casadf_app -f --tail=100
```

### Métricas Importantes

- **Taxa de resposta**: Tempo médio entre mensagem recebida e resposta
- **Taxa de conversão**: Leads qualificados / Total de conversas
- **Taxa de agendamento**: Visitas agendadas / Leads qualificados
- **Taxa de escalonamento**: Atendimentos humanos / Total de conversas

---

## Troubleshooting

### Problema: Webhook não recebe mensagens

**Solução:**
1. Verificar se N8N está rodando: `docker ps | grep n8n`
2. Testar webhook manualmente com curl
3. Verificar logs: `docker logs casadf_n8n -f`
4. Confirmar URL do webhook no WhatsApp Business

### Problema: Corretor virtual não responde

**Solução:**
1. Verificar chave OpenAI: `echo $OPENAI_API_KEY`
2. Verificar prompt em `CORRETOR_VIRTUAL_PROMPT.md`
3. Testar API OpenAI diretamente
4. Verificar limite de tokens/créditos

### Problema: Agendamento não sincroniza com Google Calendar

**Solução:**
1. Renovar token do Google: Workflow `##2.MCPGoogleCalendar(1).json`
2. Verificar permissões da conta de serviço
3. Confirmar timezone: `America/Sao_Paulo`

---

## Próximos Passos

1. **Treinar corretor virtual** com casos reais
2. **Ajustar prompts** baseado em feedback
3. **Criar dashboards** de métricas no CRM
4. **Implementar A/B testing** de mensagens
5. **Adicionar mais integrações** (Zapier, Make, etc.)

---

## Suporte

**Documentação N8N:** https://docs.n8n.io  
**Documentação WhatsApp Business:** https://developers.facebook.com/docs/whatsapp  
**Documentação Google Calendar API:** https://developers.google.com/calendar

**Contato Casa DF:**
- Email: contato@casadf.com.br
- WhatsApp: (61) 98148-8353
