


import Greet from "./hello"

function App() {
 
let username="Amritansh";
  return (   //you can return only one element to return multiple element use <></> => fragment 
    <>
    <h1>Hello {username}</h1> //{} curly braces to inject any variables.
  <Greet/>
  </>
  )
}

export default App
