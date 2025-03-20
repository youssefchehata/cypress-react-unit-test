import React, { useState } from "react";

function Counter() {
  const [count, setcount] = useState(0);
  return (
    <div className="buttons">
      <button
        onClick={() => setcount(count - 1)}
        className="dec__button bg-blue-300"
      >
        -
      </button>
      <span className="value">{count}</span>
      <button
        onClick={() => setcount(count + 1)}
        className="inc__button bg-blue-300"
      >
                +
      </button>
    </div>
  );
}

export default Counter;
