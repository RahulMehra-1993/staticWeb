import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="app">
      <p>Welcome to AZ 204</p>
      <button onClick={handleCount}>Increment</button>
      <p>{count}</p>
    </div>
  );
}

export default App;
