const express = require('express');
const routes = express.Router();

const { IncidentValidator, OngValidator, ProfileValidator, SessionValidator } = require('./validators');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

routes.post('/sessions', SessionValidator.create(), SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngValidator.create(), OngController.create);

routes.get('/profile', ProfileValidator.index(), ProfileController.index);

routes.get('/incidents', IncidentValidator.index(), IncidentController.index);
routes.post('/incidents', IncidentValidator.create(), IncidentController.create);
routes.delete('/incidents/:id', IncidentValidator.delete(), IncidentController.delete);

routes.get('/', (req, res) => {
  return res.send({
    API: 'BE THE HERO - Semana OmniStack 11.0',
    por: 'https://github.com/GustavoMarks',
  })
});

module.exports = routes;