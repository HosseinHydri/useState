import React, { useState } from "react";

const ArrayNums = () => {
  const [numArray, setNumArray] = useState([0]);

  const changeArray = () => {
    setNumArray((last) => [...last, last[last.length - 1] + 1]);
  };
  return (
    <div>
      <p>
        {numArray.map((item, index) => (
          <span>{item} ,</span>
        ))}
      </p>

      <p onClick={() => changeArray()}>Add</p>
    </div>
  );
};

export default ArrayNums;
