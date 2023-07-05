import React, { useState } from "react";

const Paragraph = ({ addText }) => {
  const [inputText, setInputText] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        if (!inputText.trim()) {
          return;
        }

        const newText = {
          id: Date.now(),
          text: inputText,
        };

        addText(newText);
        setInputText("");
      }}
    >
      <input
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        type="text"
        placeholder="Enter Paragraph"
      ></input>
      <button>Add</button>
    </form>
  );
};

export default Paragraph;
