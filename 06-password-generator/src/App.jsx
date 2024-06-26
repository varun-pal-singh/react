import React, { useCallback, useEffect, useRef, useState } from 'react'

function App() {

  // useState hook
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  // useRef hook to take reference of password using copy button
  const passwordRef = useRef(null)

  const copyPasswordToClipboard = useCallback((e) => {
    e.target.style.backgroundColor = 'black'
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 16)
    window.navigator.clipboard.writeText(password)
  }, [password])

  // useCallback hook to the cache the function whenever their
  // is a change in dependencies
  const passwordGenerator = useCallback(() => {
    let passwd = ''
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (numAllowed) {
      str += '0123456789'
    }
    if (charAllowed) {
      str += '~!@#$%^&*()-_+={}[]'
    }

    for (let i = 0; i < length; i++) {
      const charIdx = Math.floor((Math.random() * str.length) + 1)
      passwd += str.charAt(charIdx)
    }

    setPassword(passwd)
  }, [length, numAllowed, charAllowed, setPassword])


  // useEffect hook to run the function whenever their is 
  // change in dependencies or page reload
  useEffect(() => passwordGenerator(), [length, numAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className='flex flex-wrap justify-center text-2xl text-blue bg-sky-500 shadow-xl h-10'>
        Password Generator
      </div>

      <div className='w-full max-w-md mx-auto shadow-lg rounded-lg p-4 my-8 text-orange-500 bg-gray-500'>


        <div className='flex shadow-md rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly

            // useRef usecase
            ref={passwordRef}
          />

          <button
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
            onClick={(e) => copyPasswordToClipboard(e)}
            >
            Copy
          </button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex item-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              value={numAllowed}
              onChange={() => setNumAllowed(prev => !prev)}
            />
            <label>Number</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              value={charAllowed}
              onChange={() => setCharAllowed(prev => !prev)}
            />
            <label>Character</label>
          </div>
        </div>

      </div>
    </>
  )
}

export default App