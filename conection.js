// importa a conexão com o banco
const pg = require('knex')({
    client: 'pg',
    version: '11.8',
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
    }
});

module.exports = pg;