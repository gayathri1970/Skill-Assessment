import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onDelete, onUpdate }) {
  if (tasks.length === 0) return <p style={{ textAlign: "center" }}>No tasks</p>;

  return (
    <>
      {tasks.map(task => (
        <TaskItem
          key={task._id}
          task={task}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </>
  );
}
