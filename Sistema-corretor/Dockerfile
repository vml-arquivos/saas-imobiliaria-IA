# ============================================
# STAGE 1: Build do Frontend (Client)
# ============================================
FROM node:22-alpine AS client-builder

WORKDIR /app

# Copiar arquivos essenciais
COPY package.json pnpm-lock.yaml ./
COPY patches ./patches

# Instalar pnpm e dependências
RUN npm install -g pnpm@10 && \
    pnpm install --no-frozen-lockfile

# Copiar código fonte do cliente
COPY client ./client
COPY shared ./shared
COPY tsconfig.json ./

# Build do frontend
RUN pnpm run build:client


# ============================================
# STAGE 2: Build do Backend (Server)
# ============================================
FROM node:22-alpine AS server-builder

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
COPY patches ./patches

# Instalar dependências
RUN npm install -g pnpm@10 && \
    pnpm install --no-frozen-lockfile

# Copiar código do back-end
COPY server ./server
COPY drizzle ./drizzle
COPY shared ./shared
COPY storage ./storage
COPY tsconfig.json ./
COPY drizzle.config.ts ./

# Build do backend
RUN pnpm run build:server


# ============================================
# STAGE 3: Produção
# ============================================
FROM node:22-alpine

WORKDIR /app

RUN npm install -g pnpm@10

COPY package.json pnpm-lock.yaml ./
COPY patches ./patches

# Instalar dependências de produção
RUN pnpm install --prod --no-frozen-lockfile

# Copiar builds
COPY --from=client-builder /app/dist/client ./dist/client
COPY --from=server-builder /app/dist/server ./dist/server

# Copiar arquivos necessários do runtime
COPY drizzle ./drizzle
COPY shared ./shared
COPY storage ./storage
COPY server/_core ./server/_core
COPY drizzle.config.ts ./

# Criar usuário seguro
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001 && \
    chown -R nodejs:nodejs /app

USER nodejs

EXPOSE 3000

ENV NODE_ENV=production \
    PORT=3000

HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost:3000/health || exit 1

CMD ["node", "dist/server/index.js"]
