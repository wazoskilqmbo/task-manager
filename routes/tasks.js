import { Router } from "express";
const router = Router();

//?Controllers import
import {
    getAllTasks,
    createTask,
    deleteTask,
    updateTask,
    getTask,
} from "../controllers/tasks.js";

router.route("/").get(getAllTasks).post(createTask);

router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

export default router;
