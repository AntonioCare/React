import "./App.css";
import Container from "./components/Container";

function App() {
  return (
    <>
      <Container title="Children Prop">
        <input type="text" placeholder="Inserire Username" />
        <input type="password" placeholder="Inserire Password" />
        <input type="text" placeholder="Inserire Email" />
      </Container>
    </>
  );
}

export default App;
