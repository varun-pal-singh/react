import { useCallback, useState, useEffect } from 'react'

function App() {

  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [passwd, setPasswd] = useState(null);

  const passwdGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numAllowed){
      str += "0123456789";
    }
    if(charAllowed){
      str += "~`!@#$%^&*-_+=(){}[]";
    }

    for(let i = 0; i < length; i++){
      let char = str[Math.floor(Math.random() * str.length + 1)];
      pass += char;
    }
    console.log(pass);
    
    setPasswd(pass);

  }, [length, numAllowed, charAllowed, setPasswd]);

  useEffect(()=>{
    passwdGenerator();
  }, [length, numAllowed, charAllowed, passwdGenerator]);

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-600'>
      
      <h1 className='text-white text-4xl text-center font-mono'>Password Generator</h1>

        <div className='flex shadow rounded-lg overflow-hidden m-4'>
          <input type="text"
            value={passwd}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
          />

          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
              <input 
              id='range'
              type="range"
              min={8}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(evt) => {
                setLength(evt.target.value);
              }}
               />
               <label htmlFor='range'>Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={numAllowed}
              id='numInput'
              onChange={() => {
                setNumAllowed((prev) => !prev);
              }} />

            <label htmlFor="numInput">Numbers</label>
          </div>

          <div className='flex item-center gap-x-1'>
              <input type="checkbox"
              defaultChecked={charAllowed}
              id='charAllowed'
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
              />
              <label htmlFor="charAllowed">Special Characters</label>
          </div>
            
        </div>
      </div>
    </>
  )
}

export default App
