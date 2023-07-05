import { useState } from "react";

import Paragraph from "./components2/Paragraph";
import ParagraphList from "./components2/ParagraphList";
import Counter from "./components1/Counter";

function App() {
  const [counter, setCounter] = useState(0);
  const [texts, setTexts] = useState([
    {
      id: 1,
      text: "Baitik puwka",
    },
  ]);

  function addText(text) {
    setTexts([...texts, text]);
  }

  function increment() {
    setCounter(counter + 1);
  }
  function decrement() {
    setCounter(counter - 1);
  }

  return (
    <div>
      <h1>Add Paragraph: {texts.length}</h1>
      <Paragraph addText={addText} />
      <ParagraphList texts={texts} />

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
