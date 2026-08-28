import { useState } from 'react'



function App() {
  const [count, setCount] = useState(0)

  return (
   <contextProvider>
   <h1>Hello</h1>
   </contextProvider>
  
  )
}

export default App
