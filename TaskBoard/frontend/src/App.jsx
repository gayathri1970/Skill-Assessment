import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";

const API_URL = "http://localhost:5001/api/tasks";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setTasks(data);
    } catch (error) {
      console.error("Failed to fetch tasks", error);
    }
  };

  const addTask = async (task) => {
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(task),
      });

      const newTask = await res.json();
      setTasks([...tasks, newTask]);
    } catch (error) {
      console.error("Add task failed", error);
    }
  };

  const updateTask = async (updatedTask) => {
    try {
      const res = await fetch(`${API_URL}/${updatedTask._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedTask),
      });

      const data = await res.json();
      setTasks(tasks.map(t => t._id === data._id ? data : t));
    } catch (error) {
      console.error("Update failed", error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      setTasks(tasks.filter(t => t._id !== id));
    } catch (error) {
      console.error("Delete failed", error);
    }
  };

  const filteredTasks =
    filter === "All" ? tasks : tasks.filter(t => t.status === filter);

  return (
    <div className="app">
      <h1>Task Board</h1>
      <TaskForm onAdd={addTask} />
      <FilterBar filter={filter} setFilter={setFilter} />
      <TaskList
        tasks={filteredTasks}
        onDelete={deleteTask}
        onUpdate={updateTask}
      />
    </div>
  );
}
