import { useState } from 'react'
import './App.css'

function App() {

  const [estado, setEstado] = useState(0);

  function buttonPlus(){
    setEstado(estado + 1);
  }

  function buttonMinius(){
    setEstado(estado - 1);
  }

  return (
    <>
      <h1>Contador: {estado}</h1>
      <button className="buttonPlus" onClick={buttonPlus} type="button">+</button>
      <button className="buttonMinius" onClick={buttonMinius} type="button">-</button>
    </>
  )
}

export default App
