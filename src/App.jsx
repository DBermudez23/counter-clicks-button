import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState(`Counter starts at: `);

  const handleClick = () =>{
    setCount((count) => count + 1)
  }
  
  useEffect(() => {
    if (count > 0) {
      setText(`Number of clicks: `);
    }
  }, [count])

  return (
    <>
      <button onClick={handleClick}>
        {text}{count}
      </button>
    </>
  );
}

export default App;
