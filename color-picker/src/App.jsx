import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'


function App() {
  const [color, setColor] = useState('#ffffff')
  
  return (
    <>
    <h1 className='text-blue-400'>Color picker</h1>
     <div className='flex flex-col justify-center items-center'>
      <div style={{backgroundColor:color,height:100 ,width:100}}></div>
      <p>Selected color {color}</p>
      <label>Select a color: </label>
        <input type='color' onChange={(e)=>setColor(event.target.value)}/>
     </div>
    </>
  )
}

export default App
