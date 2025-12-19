// import BrokenCounter from "./components/BrokenCounter";
import FixedCounter from "./components/FixedCounter";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Debugging & Reasoning Task</h1>

      {/* Broken version */}
      {/* <BrokenCounter /> */}

      {/* Uncomment after debugging */}
      <FixedCounter />
    </div>
  );
}

export default App;
