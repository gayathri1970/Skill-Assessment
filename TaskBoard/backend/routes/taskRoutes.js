import express from "express";
import {
createTask,
getTasks,
updateTask,
deleteTask
} from "../controllers/taskController.js";
import { validateTask } from "../middleware/validateTask.js";


const router = express.Router();


router.get("/", getTasks);
router.post("/", validateTask, createTask);
router.put("/:id", validateTask, updateTask);
router.delete("/:id", deleteTask);


export default router;