const knex = require('knex');

const knexfile = require('../knexfile.js');

const environment = process.env.NODE_EN || 'development';

const knexConfig = knexfile[environment];

module.exports = knex(knexConfig);


// const knex = require('knex');
// const knexfile = require("../knexfile.js");

// const knexConfig = knexfile.development;

// module.exports = knex(knexConfig); 