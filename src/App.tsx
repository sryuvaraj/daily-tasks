import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './PracProj/ToDoList/Home'
import ThemeChangeHome from './PracProj/ThemeChngeContext/ThemeChangeHome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Home /> */}
     <ThemeChangeHome />
    </>
  )
}

export default App
