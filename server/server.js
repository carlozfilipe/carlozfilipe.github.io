const express = require('express');
const nunjucks = require('nunjucks');

const server = express();

server.use(express.static("public"));
server.set("view engine", "html");

nunjucks.configure("views", {
  express: server
})

server.get("/", (req, res) => {
  return res.render("index");
})

server.get("/classes", (req, res) => {
  return res.render("classes");
})

server.get("/about", (req, res) => {
  return res.render("about");
})

server.listen(5000, () => {
  console.log('Servidor rodando na porta 5000!')
})