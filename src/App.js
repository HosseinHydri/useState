import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);

  const changeNumber = () => {
    setNum((prev) => prev + 1);
  };
  return (
    <div>
      <p>{num}</p>
      <p onClick={() => changeNumber()}> Change Number </p>
    </div>
  );
};

export default App;
