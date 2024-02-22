import { useState } from "react"

function App() {
  const user = 'Varun'
  const [color, setColor] = useState('olive')
  return (
   <div className="w-full h-screen duration-200" style={{backgroundColor : color}}>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
        <button 
        onClick={() => setColor('Red')}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor : 'red'}}>Red</button>

        <button 
        onClick={() => setColor('green')}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor : 'green'}}>green</button>

        <button 
        onClick={() => setColor('blue')}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor : 'blue'}}>blue</button>

        <button 
        onClick={() => setColor('black')}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor : 'black'}}>black</button>
      </div>
    </div>
   </div>
  )
}

export default App
