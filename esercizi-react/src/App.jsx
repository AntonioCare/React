import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskItemProvider from "./components/TAskItem";
import TaskList from "./components/TaskList";

function App() {
  return (
    <>
      <TaskItemProvider>
        <TaskForm></TaskForm>
        <TaskList></TaskList>
      </TaskItemProvider>
    </>
  );
}

export default App;
