const express = require('express');
const nunjucks = require('nunjucks');

const server = express();

server.set("View engine", "html");

nunjucks.configure("views", {
  express: server
})

server.get("/", (req, res) => {
  res.send("Olá, my friend!");
})

server.listen(5000, () => {
  console.log('Servidor rodando na porta 5000!')
})