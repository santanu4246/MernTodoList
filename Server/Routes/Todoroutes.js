import { Router } from "express";
import { deleteTodo, getTodo, saveTodo, updateTodo } from "../Controllers/TodoController.js";
const router = Router();

router.get("/", getTodo);
router.post('/save',saveTodo)
router.post('/update',updateTodo)
router.post('/delete',deleteTodo)

export default router;
