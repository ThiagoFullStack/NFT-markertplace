# Usar a imagem oficial do Node.js como base
FROM node:18-alpine

# Definir o diretório de trabalho
WORKDIR /app

# Copiar os arquivos de dependências para o container
COPY package.json package-lock.json ./

# Instalar as dependências do projeto, incluindo as dev dependencies do TypeScript
RUN npm install --production --legacy-peer-deps

# Instalar manualmente as dependências do TypeScript
RUN npm install --save-dev typescript @types/react @types/node --legacy-peer-deps


# Copiar o restante dos arquivos para o container
COPY . .

# Rodar o build do Next.js
RUN npm run build --legacy-peer-deps

# Definir o comando de inicialização do contêiner
CMD ["npm", "start"]


