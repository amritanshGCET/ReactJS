import { useState } from "react";
function App() {
  let [count, setCount] = useState(0); //use let instead of const
  const inc = () => {
    count = count + 1;
    if(count>20){
      count=20;      
    }
    setCount(count); //useState always returns two values one is number and a function
  };
  const dec = () => {
    count = count - 1;
    if (count < 0) {
      count = 0;
    }
    setCount(count);
  };
  return (
    <>
      <h1>Amritansh singh</h1>
      <p>This is a Number Counter = {count}</p>
      <button onClick={inc}>Increase the count</button>
      <button onClick={dec}>Decrease the count</button>
      <p>{count}</p>
      <footer>{count}</footer>
    </>
  );
}

export default App;
