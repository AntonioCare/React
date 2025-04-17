import { useTasks } from "./TAskItem";

export default function TaskForm() {
  const { titolo, handleChange, handleSubmit, handleClearAll } = useTasks();

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Le tue Task</h1>
        <label>Nuova Task : </label>
        <input
          type="text"
          name="titolo"
          value={titolo}
          placeholder="Inserire task"
          onChange={handleChange}
        />
        <button type="submit" name="invio">
          Aggiungi Task
        </button>
        <button type="button" name="cancella" onClick={handleClearAll}>
          Pulisci Task
        </button>
      </form>
    </>
  );
}
