const knex = require('knex');
const configs = require('../../knexfile');

const configuration = process.env.NODE_ENV === 'test' ? configs.test : configs.development

const connection = knex(configuration);

module.exports = connection;