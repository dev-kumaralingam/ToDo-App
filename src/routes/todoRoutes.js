//src/routs/todoRoutes.js
const express = require('express');
const router = express.Router();
const ToDoController = require('../controllers/ToDoController');

router.get('/', ToDoController.getToDoList);
router.post('/add', ToDoController.addToDo);
router.delete('/remove/:id', ToDoController.removeToDo);
router.put('/complete/:id', ToDoController.completeToDo);

module.exports = router;
