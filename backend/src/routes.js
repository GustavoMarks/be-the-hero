const express = require('express');
const cors = require('cors');
const routes = express.Router();

app.routes('/', (req, res) => {
  return res.send({
    API: 'BE THE HERO - Semana OmniStack 11.0',
    por: '@GustavoMarks',
  })
});

module.exports = routes;