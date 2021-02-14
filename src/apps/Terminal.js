import React, { useState } from "react";

export default function Terminal() {
  const [inputValue, setInputValue] = useState("");
  const [bufferval, setBufferval] = useState([]);

  const evaluate = (e) => {
    const keyCode = e.which || e.keyCode;
    var output = "Error: Check your syntax";
    if (keyCode === 13) {
      // Enter pressed
      try {
        output = eval(inputValue);
      } catch (e) {
        if (e instanceof SyntaxError) {
          output = e.message;
        }
      }
      setBufferval([...bufferval, "$ " + inputValue, "> " + output]);

      setInputValue("");

      return false;
    }
  };

  return (
    <div className="w-full h-full bg-black text-white">
      {bufferval.map((t) => (
        <p className="font-mono">{t}</p>
      ))}
      <input
        type="text"
        value={"$ " + inputValue}
        onChange={(e) => setInputValue(e.target.value.substring(2))}
        onKeyPress={evaluate}
        className="w-full bg-black text-white font-mono"
      />
    </div>
  );
}
