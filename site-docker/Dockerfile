# Use a imagem Node.js como base
FROM node:14

# Diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copiar os arquivos do projeto para o diretório de trabalho
COPY package*.json ./
COPY app.js ./

# Instalar as dependências da aplicação
RUN npm install

# Comando para iniciar o servidor
CMD ["node", "app.js"]

# Porta em que o servidor vai rodar (deve corresponder à porta definida na aplicação)
EXPOSE 3000
