import React, { useState } from "react";

const Array = () => {
  const [num, setNum] = useState(0);
  const myArray = [1, 2, 3, 4, 5, 6];
  const changeNumber = () => {
    setNum((prev) => prev + 1);
  };
  return (
    <div>
      <p>
        {myArray.map((item, index) => (
          <span>{item}</span>
        ))}
      </p>
      <p onClick={() => changeNumber()}> Change Number </p>
    </div>
  );
};

export default Array;
