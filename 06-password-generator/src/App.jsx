import { useState, useCallback, useEffect, useRef } from "react"


function App() {
  const [length, setLength] = useState(8)
  const [numAllow, setNumAllow] = useState(false)
  const [charAllow, setCharAllow] = useState(false)
  const [passwd, setPasswd] = useState('')

  // useRef hook
  const passwdRef = useRef(null)

  const passwdGenerator = useCallback(() => {
    let pass = ''
    let string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if (numAllow) string += '0123456789'
    if (charAllow) string += '!@#$%^&*()_-+={}[]'

    for (let i = 1; i <= length; i++) {
      let charIdx = Math.floor(Math.random() * (string.length + 1))
      pass += string.charAt(charIdx)
    }

    setPasswd(pass) // update password
  }, [length, numAllow, charAllow, setPasswd])

  const copyPasswdToClipboard = useCallback(() => {
    // UI selection only
    passwdRef.current?.select()
    passwdRef.current?.setSelectionRange(0, 3)
    // copypart 
    window.navigator.clipboard.writeText(passwd)
  }, [passwd])

  // passwdGenerator()
  // useEffect
  useEffect(() => {
    passwdGenerator()
  }, [length, numAllow, charAllow, passwdGenerator])


  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-500">
        <h1 className=' my-3 text-xl text-center text-white' >Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text"
            value={passwd}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwdRef}
          />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          onClick={copyPasswdToClipboard}
          >Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(evt) => { setLength(evt.target.value) }}
            />
            <label>Length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox"
              defaultChecked={numAllow}
              id="numInput"
              onChange={() => {
                setNumAllow((prev) => !prev)
              }} />
            <label htmlFor="numInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox"
              defaultChecked={charAllow}
              id="charInput"
              onChange={() => {
                setCharAllow((prev) => !prev)
              }} />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
