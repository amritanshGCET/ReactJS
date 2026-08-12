import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import Home from './components/home/home'
import { Outlet } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header />
      <Outlet />
     <Footer />  
    </>
  )
}

export default App
