import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [title, setTitle] = useState('Default Value')
  useEffect(()=>{
    fetch("http://localhost:8080/home")
    .then(response => response.text()) // Fix: Use arrow function for response handling
    .then(text => setTitle(text))
    .catch(error => console.error("Error Fetching", error));
  
  },[])
  return (
    <>
      <h1>React + {title}</h1>
    </>
  )
}

export default App
