import Todo from '../models/todo';
import asyncHandler from 'express-async-handler';

const posttodo = asyncHandler(async (req, res) => {
  const todo = new Todo(req.body);
  try {
    await todo.save();
    res.status(201).send(todo)
  } catch (error) {
    res.status(500).send(error)
  }
})

const gettodo = asyncHandler(async (req, res) => {
  try {
    const todo = await Todo.find();
    if (!todo) {
      res.status(404)
      throw new Error('Not Found')
    }
    res.status(201).json({ todo });
  } catch (error) {
    console.log(error);
    res.status(500).send(error)
  }
})

const deletetodo = asyncHandler(async (req, res) => {
  const todo = await Todo.findById(req.params.id)

  if (!todo) {
    res.status(404);
    throw new Error('Todo Not Found');
  }
  await todo.remove();
  res.status(200).json({
    success: true,
    data: {},
  });
})

export default {
  posttodo, gettodo, deletetodo
}
