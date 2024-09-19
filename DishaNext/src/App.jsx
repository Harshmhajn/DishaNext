import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Home from './pages/Home'
import Nav from './components/nav/Nav.jsx'


function App() {
  return (
    <>
      <Nav />
      <Home />  
    </>
  )
}

export default App
