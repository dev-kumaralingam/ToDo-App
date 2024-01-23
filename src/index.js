// src/index.js

const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./database/database');
const userRoutes = require('./routes/userRoutes');
const todoRoutes = require('./routes/todoRoutes');
const emailService = require('./services/emailService');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

sequelize.sync()
    .then(() => {
        console.log('Database synced');
    })
    .catch((err) => {
        console.error('Error syncing database:', err);
    });

app.get('/', (req, res) => {
    res.send('Welcome to the ToDo App!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

app.use('/user', userRoutes);
app.use('/todo', todoRoutes);

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
});

emailService.setupEmailService();
