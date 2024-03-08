import React, { useState } from "react";
import "./ToDo.css";

export default function Tasks() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addBtn = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue]);
      setInputValue("");
    }
  };

  const removeItem = (index) => {
    const updateItem = [...items];
    updateItem.splice(index, 1);
    setItems(updateItem);
  };
  const updateItem = (index, newValue) => {
    const updateItem = [...items];
    updateItem[index] = newValue;
    setItems(updateItem);
  };

  return (
    <div className="container">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addBtn}>Add</button>
      <ul>
        {items.map((data, index) => (
          <li key={index}>
            {data}
            <button onClick={() => removeItem(index)}>Delete</button>
            <button onClick={() => updateItem(index, prompt("update a task"))}>
              Update
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
