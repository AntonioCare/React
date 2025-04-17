import { useTasks } from "./TAskItem";

export default function TaskList() {
  const { tasks, taskCompletato, deleteTask } = useTasks();
  if (tasks.length === 0) {
    return <p>Nessun Task Presente</p>;
  }
  return (
    <>
      {tasks.map((task, index) => (
        <li
          key={index}
          style={{
            textDecoration: task.completato === true ? "line-through" : "none",
          }}
        >
          Task: {task.titolo}
          <input
            type="checkbox"
            checked={task.completato}
            onChange={() => taskCompletato(task.id)}
          ></input>
          <button
            name="delete"
            onClick={() => {
              if (window.confirm("Sei Sicuro Di Cancellare La Task?")) {
                deleteTask(task.id);
              }
            }}
          >
            Elimina Task
          </button>
        </li>
      ))}
    </>
  );
}
