// src/models/user.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database/database'); 

const ToDo = require('./todo');

const User = sequelize.define('User', {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

User.hasMany(ToDo);

module.exports = User;

