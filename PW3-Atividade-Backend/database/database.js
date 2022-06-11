
const Sequelize = require('sequelize');


const connection = new Sequelize(
    'api_consultorio_bd',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql',
        timezone: '-03:00'
    }
);

module.exports = connection;