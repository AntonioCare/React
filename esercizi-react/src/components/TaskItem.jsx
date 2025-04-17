import { useState, useEffect, createContext, useContext } from "react";

const TaskContext = createContext();

export const useTasks = () => useContext(TaskContext);

export default function TaskItemProvider({ children }) {
  const [tasks, setTasks] = useState(() => {
    const localTask = localStorage.getItem("tasks");
    return localTask ? JSON.parse(localTask) : [];
  });
  const [titolo, setTitolo] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function handleChange(event) {
    setTitolo(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    const id = Date.now();
    const task = {
      id: id,
      titolo: titolo,
      completato: false,
    };
    setTasks([...tasks, task]);
    setTitolo("");
  }

  function taskCompletato(idCercato) {
    setTasks((allTask) =>
      allTask.map((task) =>
        task.id === idCercato ? { ...task, completato: !task.completato } : task
      )
    );
  }
  function deleteTask(idCercato) {
    setTasks((alltask) => alltask.filter((task) => task.id !== idCercato));
  }
  function handleClearAll() {
    setTasks([]);
  }

  return (
    <>
      <TaskContext.Provider
        value={{
          tasks,
          titolo,
          handleChange,
          handleSubmit,
          handleClearAll,
          taskCompletato,
          deleteTask,
        }}
      >
        {children}
      </TaskContext.Provider>
    </>
  );
}
