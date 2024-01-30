const Task = require('../models/Task');
let tasks = require('../data/demoData');

// Get all tasks
exports.getAllTasks = (req, res) => {
  res.status(200).json(tasks);
};

// Get a task by ID
exports.getTaskById = (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = tasks.find((task) => task.id === taskId);

  if (task) {
    res.status(200).json(task);
  } else {
    res.status(404).json({ error: 'Task not found' });
  }
};

exports.createTask = (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res.status(400).json({ error: 'Title and description are required' });
  }

  const newTask = new Task(tasks.length + 1, title, description);
  tasks.push(newTask);
  res.status(201).json(newTask);
};

exports.updateTask = (req, res) => {
  const taskId = parseInt(req.params.id);
  const taskIndex = tasks.findIndex((task) => task.id === taskId);

  if (taskIndex !== -1) {
    tasks[taskIndex] = { ...tasks[taskIndex], ...req.body };
    res.status(200).json(tasks[taskIndex]);
  } else {
    res.status(404).json({ error: 'Task not found' });
  }
};

exports.deleteTask = (req, res) => {
  const taskId = parseInt(req.params.id);
  tasks = tasks.filter((task) => task.id !== taskId);
  res.status(204).send();
};
