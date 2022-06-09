import "./styles.css";
import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  const handleClick1 = () => {
    return counter < 22 ? setCounter(counter + 1) : 22;
  };

  const handleClick2 = () => {
    return counter > 0 ? setCounter(counter - 1) : 0;
  };

  return (
    <div>
      <h2>Contador</h2>
      <div>{counter}</div>
      <div className="buttons">
        <button onClick={handleClick1}>Increment</button>
        <button onClick={handleClick2}>Decrement</button>
      </div>
    </div>
  );
};

export default App;
