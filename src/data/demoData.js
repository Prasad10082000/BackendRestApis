const Task = require('../models/Task');

const tasks = [
  new Task(1, 'Task 1', 'Description for Task 1'),
  new Task(2, 'Task 2', 'Description for Task 2'),
];

module.exports = tasks;
