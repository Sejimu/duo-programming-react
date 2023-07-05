import { useState } from "react";
import Counter from "./components1/Counter";

function App() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }
  function decrement() {
    setCounter(counter - 1);
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Counter
        counter={counter}
        setCounter={setCounter}
        increment={increment}
        decrement={decrement}
      />
    </div>
  );
}

export default App;
