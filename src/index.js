import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  return <HookSwither />;
};

const HookSwither = () => {
  const [color, setColor] = useState("gray");
  const [fontSize, setFontSize] = useState(14);

  return (
    <div
      style={{
        padding: "10px",
        backgroundColor: color,
        fontSize: `${fontSize}px`,
      }}
    >
      Hello World
      <button onClick={() => setColor("gray")}>Gray</button>
      <button onClick={() => setColor("white")}>Ligth</button>
      <button onClick={() => setFontSize((fontSize) => fontSize + 2)}>+</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
