const express = require('express');
const routes = express.Router();

const OngController = require('./controllers/OngController');
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/', (req, res) => {
  return res.send({
    API: 'BE THE HERO - Semana OmniStack 11.0',
    por: '@GustavoMarks',
  })
});

module.exports = routes;