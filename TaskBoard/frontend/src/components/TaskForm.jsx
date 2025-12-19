import { useState } from "react";

export default function TaskForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("Todo");

  const submit = () => {
    if (!title.trim()) return;

    onAdd({
      id: Date.now(),
      title,
      status
    });

    setTitle("");
    setStatus("Todo");
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
      <input
        placeholder="Task title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <select value={status} onChange={e => setStatus(e.target.value)}>
        <option>Todo</option>
        <option>In Progress</option>
        <option>Done</option>
      </select>
      <button onClick={submit}>Add</button>
    </div>
  );
}
