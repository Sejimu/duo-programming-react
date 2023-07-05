import React, { useState } from "react";

function Counter({ counter, setCounter, increment, decrement }) {
  return (
    <div>
      <h1>{counter}</h1>
      <button
        onClick={() => {
          decrement();
        }}
      >
        -1
      </button>
      <button
        onClick={() => {
          increment();
        }}
      >
        +1
      </button>
    </div>
  );
}

export default Counter;
