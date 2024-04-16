import { useState } from "react";
import ButtonTray from "./components/ButtonTray";

export default function App() {
  const [color, setColor] = useState('olive')

  function changeColor(value){
    console.log(value)
    // const color = value.replace(/\s+/g, '')
    const color = value
    setColor(prev => color)
  }

  return (
    <div className="w-full h-screen duration-200"
      style={{
        backgroundColor: color,
      }}
      onClick={(evt) => changeColor(evt.target.style.backgroundColor)}
    >

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">

        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-lg px-3 py-2">
          
          <button className="outline-none px-4 py-1 rounded-lg"
          style={{
            backgroundColor: 'red',
          }}>
            Red
          </button>

          <button className="outline-none px-4 py-1 rounded-lg"
          style={{
            backgroundColor: 'yellow',
          }}>
            Yellow
          </button>

          <button className="outline-none px-4 py-1 rounded-lg"
          style={{
            backgroundColor: 'green',
          }}>
            Green
          </button>

          <button className="outline-none px-4 py-1 rounded-lg"
          style={{
            backgroundColor: 'skyblue',
          }}>
            Sky Blue
          </button>

          <button className="outline-none px-4 py-1 rounded-lg"
          style={{
            backgroundColor: 'Violet',
          }}>
            Violet
          </button>

          <button className="outline-none px-4 py-1 rounded-lg"
          style={{
            backgroundColor: 'gray',
          }}>
            Gray
          </button>

          <button className="outline-none px-4 py-1 rounded-lg"
          style={{
            backgroundColor: 'royalblue',
          }}>
            Royal Blue
          </button>

        </div>
      </div>

    </div>
  )
}