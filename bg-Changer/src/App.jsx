import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'


function App() {
  const [color, setColor] = useState("olive")
function click(){
console.log("Button was clicked"); //we can also create components of button
}
  return (
    
    <div className='h-screen w-full flex items-center justify-center' style={{backgroundColor:color}}>
      <div className='flex flex-row justify-around bg-gray-800 gap-4 p-1 absolute top-5 rounded-2xl'>
    <button onClick={()=>{setColor("red")}} className='bg-red-500 p-1 rounded-2xl  text-black' >Red</button>
    <button onClick={()=>setColor("blue")} className='bg-blue-400 p-1 rounded-2xl text-black' >Blue</button> 
    <button onClick={()=>setColor("Green")} className='bg-green-400 p-1 rounded-2xl text-black' >Green</button>
    <button onClick={()=>setColor("Yellow")} className='bg-yellow-300 p-1 rounded-2xl text-black' >Yellow</button> 
    <button onClick={()=>setColor("Lavender")} className='bg-purple-300 p-1 rounded-2xl text-black' >Lavender</button>
    <button onClick={()=>setColor("pink")} className='bg-pink-400 p-1 rounded-2xl text-black' >pink</button>
    <button onClick={()=>setColor("yellow")} className='bg-amber-300 p-1 rounded-2xl text-black' >amber</button> 
    <button onClick={()=>setColor("purple")} className='bg-purple-500 p-1 rounded-2xl text-black' >purple</button>
    <button onClick={()=>setColor("teal")} className='bg-teal-500 p-1 rounded-2xl text-black' >teal</button>
    </div>
    </div>  
  
  )
}

export default App
