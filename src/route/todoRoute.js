import express from "express";
import { createTodo, deleteTodo, getAllTodo, updateAllTodo } from "../controller/todoController.js";

const todoRoute = express.Router()

todoRoute.post('/new', createTodo)
todoRoute.get('/get', getAllTodo)
todoRoute.delete('/delete/:id', deleteTodo)
todoRoute.put('/update/:id', updateAllTodo)


export default todoRoute