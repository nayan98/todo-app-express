const express = require('express');
const router = express.Router();

const todoController = require('./controllers/todoController');

//TODO - Get the homepage for rendering
router.get('/', todoController.homepage);

//TODO - Adding new task in the todo list
router.post('/',todoController.saveTask);

//TODO - Deleting the selected task(s) (if multiple tasks with same name then delete all )
router.delete('/:item',todoController.deleteTask);

//TODO - Getting all the tasks
router.get('/api/data',todoController.getTasks);

module.exports = router;