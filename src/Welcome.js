import React, { useState } from "react";

const Counter = () => {
  const [num, setNum] = useState(0);

  const changeNumber = (input) => {
    setNum((prev) => prev + input);
  };
  return (
    <>
      <p>{num}</p>
      <div style={{ display: "flex" }}>
        <button onClick={() => changeNumber(10)}>+10</button>
        <button onClick={() => changeNumber(-10)}>-10</button>
        <button onClick={() => changeNumber(5)}>+5</button>
        <button onClick={() => changeNumber(-5)}>-5</button>
      </div>
    </>
  );
};

export default Counter;
