'use strict';
const express = require('express');
const cors = require('cors');
const app = express();

// set para corpo de requisições como JSON
app.use(express.json());
// configurando permissões de troca de dados
app.use(cors());

app.get('/', (req, res) => {
  return res.send({
    API: 'BE THE HERO - Semana OmniStack 11.0',
    por: '@GustavoMarks',
  })
})

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