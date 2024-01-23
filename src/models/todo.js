//src/models/todo.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database/database'); 

const ToDo = sequelize.define('ToDo', {
    task: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    completionTime: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
});

module.exports = ToDo;
