import { useState } from 'react'
import Header from '../../react-router/src/components/Header/header'
import Footer from './components/footer'


function App() {
  const [taskContainer, setCount] = useState([""])

  return (
    <>
  <Header  />
  <Outlet />
  <Footer />
    </>
  )
}

export default App
