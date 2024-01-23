//src/controller/TodoController.js
const ToDo = require('../models/todo');

exports.getToDoList = (req, res) => {
    res.json({ todos: [] });
};

exports.addToDo = async (req, res, next) => {
    try {
        const { userId, task, completionTime } = req.body;
        const newToDo = await ToDo.create({ UserId: userId, task, completionTime });
        res.status(201).json(newToDo);
    } catch (error) {
        next(error);
    }
};

exports.removeToDo = async (req, res, next) => {
    try {
        const todoId = req.params.id;
        const deletedToDo = await ToDo.destroy({ where: { id: todoId } });

        if (deletedToDo) {
            res.status(200).json({ message: 'ToDo item removed successfully' });
        } else {
            res.status(404).json({ error: 'ToDo item not found' });
        }
    } catch (error) {
        next(error);
    }
};

exports.completeToDo = async (req, res, next) => {
    try {
        const todoId = parseInt(req.params.id, 10);
        const updatedToDo = await ToDo.update(
            { completed: true, updatedAt: new Date() },
            { where: { id: todoId } }
        );

        if (updatedToDo[0]) {
            res.status(200).json({ message: 'ToDo item completed successfully' });
        } else {
            res.status(404).json({ error: 'ToDo item not found' });
        }
    } catch (error) {
        next(error);
    }
};
