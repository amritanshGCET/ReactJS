import LogIn from './components/logIn'
import Profile from './components/profile'
import ContextProvider from './context/contextProvider'

function App() {
  return (
   <ContextProvider>
     <h1>Hello</h1>
     <LogIn />
     <Profile />
   </ContextProvider>
  )
}

export default App
