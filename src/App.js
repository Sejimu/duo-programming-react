import { useState } from "react";
import Paragraph from "./components2/Paragraph";
import ParagraphList from "./components2/ParagraphList";

function App() {
  const [texts, setTexts] = useState([
    {
      id: 1,
      text: "Baitik puwka",
    },
  ]);

  function addText(text) {
    setTexts([...texts, text]);
  }
  return (
    <div className="App">
      <h1>Add Paragraph: {texts.length}</h1>
      <Paragraph addText={addText} />
      <ParagraphList texts={texts} />
    </div>
  );
}

export default App;
