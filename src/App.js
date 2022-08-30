import React, { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // useEffect(() => {
  //   console.log("useEffect called");
  // }, []);
  
  useEffect(() => {
    document.title = text;
  }, [text]);
  
  useEffect(() => {
    setTimeout(() => setCount(0), 5000);
  }, []);

  console.log("Component rendering");

  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>I've been clicked {count} times</button>
      <input 
      type="text" 
      placeholder="Type away..." 
      value={text}
      onChange={(event) => setText(event.target.value)}
      />
    </div>

  );
}

export default App;
