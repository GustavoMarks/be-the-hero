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

module.exports = app;