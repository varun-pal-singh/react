import { useState } from 'react' // for hooks
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 15;
  
  // document.querySelector("#add").addEventListener("click", addValue);

  let [counter, setCounter] = useState(0)

  const addValue = () => {
    counter += 1;

    if(counter <= 20){
      setCounter(counter);  // this will update all the occurance of counter in UI.
      console.log("value added", `value of counter ${counter}`);
    }
  }

  const decValue = () => {
    counter -= 1;

    if(counter >= 0){
      setCounter(counter); // this will update all the occurance of counter in UI.
      console.log("value decreased", `value of counter ${counter}`);
    }
  }

  return (
    <>
     <h1>Chai aur react</h1>
     <h2>counter value : {counter} </h2>
     <button id='add' onClick={addValue}>Add value {counter} </button> <br />
     <button id='decrease' onClick={decValue}>Decrease value {counter} </button>
     <p>footer : {counter} </p>
    </>
  )
}

export default App
