import { useState } from "react";

export default function TaskItem({ task, onDelete, onUpdate }) {
  const [isEdit, setIsEdit] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [status, setStatus] = useState(task.status);

  const save = () => {
    onUpdate({ ...task, title, status });
    setIsEdit(false);
  };

  return (
    <div className="task-item">
      {isEdit ? (
        <>
          <input value={title} onChange={e => setTitle(e.target.value)} />
          <select value={status} onChange={e => setStatus(e.target.value)}>
            <option>Todo</option>
            <option>In Progress</option>
            <option>Done</option>
          </select>
          <button onClick={save}>Save</button>
        </>
      ) : (
        <>
          <span>{task.title} - {task.status}</span>
          <div>
            <button className="edit" onClick={() => setIsEdit(true)}>Edit</button>
            <button className="delete" onClick={() => onDelete(task._id)}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
}
// import { useState } from "react";

// export default function TaskItem({ task, onDelete, onUpdate }) {
//   const [isEdit, setIsEdit] = useState(false);
//   const [title, setTitle] = useState(task.title);
//   const [status, setStatus] = useState(task.status);

//   const save = () => {
//     onUpdate({ ...task, title, status });
//     setIsEdit(false);
//   };

//   return (
//     <div className="task">
//       {isEdit ? (
//         <>
//           <input
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//           />

//           <select
//             value={status}
//             onChange={(e) => setStatus(e.target.value)}
//           >
//             <option>Todo</option>
//             <option>In Progress</option>
//             <option>Done</option>
//           </select>

//           <button onClick={save}>Save</button>
//         </>
//       ) : (
//         <>
//           <div className="task-title">{task.title}</div>

//           <span
//             className={`badge ${
//               task.status === "Todo"
//                 ? "todo"
//                 : task.status === "In Progress"
//                 ? "progress"
//                 : "done"
//             }`}
//           >
//             {task.status}
//           </span>

//           <div className="task-actions">
//             <button onClick={() => setIsEdit(true)}>Edit</button>
//             <button
//               className="delete"
//               onClick={() => onDelete(task._id)}   // ✅ FIXED
//             >
//               Delete
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }
