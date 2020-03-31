'use strict';
const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate')
const app = express();
const routes = require('./routes');

// set para corpo de requisições como JSON
app.use(express.json());
// configurando permissões de troca de dados
app.use(cors());

app.use(routes);
app.use(errors());
// configurando porta para api
const port = normalizaPort(process.env.PORT || '3333');

// verificando se porta é válida
function normalizaPort(val) {
  const port = parseInt(val, 10);
  if (isNaN(port)) return val;
  if (port >= 0) return port;
  return false;
};

app.listen(port, function () {
  console.log("*******************************************");
  console.log(`API em execução em >> http://localhost:${port}`);
  console.log("*******************************************");
});