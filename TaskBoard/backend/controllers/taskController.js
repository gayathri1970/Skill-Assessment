import Task from "../models/Task.js";


// CREATE
export const createTask = async (req, res, next) => {
try {
const task = await Task.create(req.body);
res.status(201).json(task);
} catch (error) {
next(error);
}
};


// READ ALL
export const getTasks = async (req, res, next) => {
try {
const tasks = await Task.find();
res.status(200).json(tasks);
} catch (error) {
next(error);
}
};


// UPDATE
export const updateTask = async (req, res, next) => {
try {
const task = await Task.findByIdAndUpdate(
req.params.id,
req.body,
{ new: true }
);


if (!task)
return res.status(404).json({ message: "Task not found" });


res.status(200).json(task);
} catch (error) {
next(error);
}
};


// DELETE
export const deleteTask = async (req, res, next) => {
try {
const task = await Task.findByIdAndDelete(req.params.id);


if (!task)
return res.status(404).json({ message: "Task not found" });


res.status(200).json({ message: "Task deleted" });
} catch (error) {
next(error);
}
};