import { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { increment,decrement,incrementByValue } from './features/counterSlice';
function App() {
  const [val,setVal]=useState(0);
  const dispatch=useDispatch();
  const count=useSelector((state)=>state.value)
  const handleClick=()=>{
    dispatch(incrementByValue(val))
  }
  return (
  <>
  <div>{count}</div>
  <button onClick={()=>{dispatch(increment())}}>Increase</button>
  <button onClick={()=>{dispatch(decrement())}}>decrease</button>
  <input type='number' value={val} onChange={(e)=>{setVal(Number(e.target.value))}}></input>
  <button onClick={handleClick}>Increase By amount</button>
  </>
  )
}

export default App
