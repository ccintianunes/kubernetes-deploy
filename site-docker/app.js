const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Olá, mundo! Esta é uma aplicação Dockerizada de cteste de Cintia Nunes.');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
