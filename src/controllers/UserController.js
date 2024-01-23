// src/controllers/UserController.js
const { Op } = require('sequelize');
const User = require('../models/user');

exports.registerUser = async (req, res, next) => {
    try {
        
        const { email, username, password } = req.body;
        const newUser = await User.create({ email, username, password });
        res.status(201).json(newUser);
    } catch (error) {
        next(error);
    }
};


exports.loginUser = async (req, res, next) => {
    try {
        
        const { email, password } = req.body;
        const user = await User.findOne({
            where: {
                email,
                password: {
                    [Op.eq]: password,
                },
            },
        });

        if (user) {
            res.status(200).json({ message: 'Login successful' });
        } else {
            res.status(401).json({ error: 'Invalid credentials' });
        }
    } catch (error) {
        next(error);
    }
};
