import React from "react";
export const Dummy = () => {
  const [count, setCount] = React.useState(0);
  const [name, setName] = React.useState("");

  const handleAdd = () => {
    console.log("Before", count);
    setCount(count + 1);
  };

  const handleRemove = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div className="App">
        <span>{count}</span>
        <br />
        <span>{name}</span>
        <br />

        <button id="pos" onClick={handleAdd}>
          Add
        </button>
        <button disabled={count === 0} id="neg" onClick={handleRemove}>
          Remove
        </button>
        <br />
        <input
          type="text"
          placeholder="Enter Your Name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
    </>
  );
};
