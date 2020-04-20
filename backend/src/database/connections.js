// importando knex
const knex = require('knex');

// importando arquivo de configuração de desenvolvimento do knex
const configuration = require('../../knexfile');

// pegando variável de ambiente(garada ao rodar o script de teste)
const config = process.env.NODE_ENV === 'test' ? configuration.test : configuration.development; 

// definindo conexão
const connetcion = knex(config);

module.exports = connetcion;