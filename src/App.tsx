import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './PracProj/ToDoList/Home'
import ThemeChangeHome from './PracProj/ThemeChngeContext/ThemeChangeHome'
import FormHome from './PracProj/FormValidation/FormHome'
import APIHome from './PracProj/fakeAPICRU/APIHome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Home /> */}
     {/* <ThemeChangeHome /> */}
     {/* <FormHome /> */}
     <APIHome />
    </>
  )
}

export default App
