import { useEffect, useState } from 'react';
import Homepage from './Homepage';
import './App.css';
import Navbar from './Navbar';

function App() {
  const [title, setTitle] = useState('Default Value');
  
  useEffect(() => {
    fetch("http://localhost:8080/home")
      .then(response => response.text())
      .then(text => setTitle(text))
      .catch(error => console.error("Error Fetching", error));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <h1>React + {title}</h1>
    </div>
  );
}

export default App;
