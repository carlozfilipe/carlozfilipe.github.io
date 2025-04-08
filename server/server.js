const express = require('express');
const server = express();

server.listen(5000, () => {
  console.log('Servidor rodando na porta 5000!')
})