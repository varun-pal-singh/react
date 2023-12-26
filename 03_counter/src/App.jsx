import { useState } from 'react'

import './App.css'

function App() {
  const [value, setValue] = useState(0)
  // window.addEventListener("mousemove", (evt) => {
  //     setvalue([evt.clientX, evt.clientY])
  // })

  return (
    <>
      <h1>Chai aur react | hooks {value}</h1>
      <h2>current value {value}</h2>
      <h3>here also, {value}</h3>
      <h4>here too, {value}</h4>

      <button onClick={(evt) => {
        if (value < 20) setValue(value + 1)
      }}>
        Add value
      </button><br />

      <button onClick={(evt) => {
        if (value > 0) setValue(value - 1)
      }}>
        Remove value
      </button>
    </>
  )
}

export default App
