import { useState } from 'react'

function App() {

  const [color, setColor] = useState("black");

  return (
    <>
    <h1 className='text-white text-center bg-black'>
      Background Changer
    </h1>
    <div className='w-full h-screen duration-200'
    style={{backgroundColor: color}}>

        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">

          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-3xl px-3 py-2">

            <button className='outline-none px-4 rounded-full text-white shadow-lg'
            style={{backgroundColor: "red"}}
            onClick={() => setColor('red')}>
              Red
            </button>

            <button className='outline-none px-4 rounded-full text-white shadow-lg'
            style={{backgroundColor: "green"}}
            onClick={() => setColor('green')}>
              Green
            </button>

            <button className='outline-none px-4 rounded-full text-white shadow-lg'
            style={{backgroundColor: "blue"}}
            onClick={() => setColor('blue')}>
              Blue
            </button>

            <button className='outline-none px-4 rounded-full text-white shadow-lg'
            style={{backgroundColor: "orange"}}
            onClick={() => setColor('orange')}>
              Orange
            </button>
          </div>
        </div>
    </div>
    </>
  )
}

export default App