// src/database/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    port: '3306',
    username: 'root',
    password: 'Kumar2384',
    database: 'todo',
});

module.exports = sequelize;
