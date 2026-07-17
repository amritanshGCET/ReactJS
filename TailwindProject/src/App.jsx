import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/header.jsx' //you can import your custom components
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <div className='flex flex-col items-center justify-center p-50'>
     <h1 className='bg-green-600 text-black p-10 rounded-2xl ' >hello ji kaise ho</h1>
     <h2 className='bg-green-900 p-4 rounded-3xl'>Tailwind css test</h2>
     </div>
    </>
  )
}

export default App
