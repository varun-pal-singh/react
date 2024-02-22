import { useState } from 'react'
import './App.css'

function App() {
  let [value, setValue] = useState(0)

  function handleAddClick(){
    if (value >= 10) return
    // value += 1

    // setValue(value - 1)
    // setValue(value - 1)
    // setValue(value - 1)
    // setValue(value + 1) // only last wala count

    setValue(prevCounter => prevCounter + 1)
    setValue(prevCounter => prevCounter + 1)
    setValue(prevCounter => prevCounter + 1)
    setValue(prevCounter => prevCounter + 1)

  }

  function handleRemoveClick(){
    if (value <= 0) return
    // value -= 1
    setValue(value - 1)
  }  

  return (
    <>
      <h1>Chai aur react {value}</h1>
      <h2>Counter value : {value}</h2>
      <p>current value : {value}</p>
      <button onClick={() => handleAddClick(value)} >Add 1</button> <br />
      <button onClick={() => handleRemoveClick(value)}>Remove 1</button>
      <footer> current value : {value}</footer>
    </>
  )
}

export default App
