import { useCallback, useEffect, useRef, useState } from "react"

function App() {
  const [password, setPassword] = useState('')
  const passwordRef = useRef(null)
  const [length, setLength] = useState(8)
  const [numAllow, setNumAllow] = useState(false)
  const [charAllow, setCharAllow] = useState(false)

  const copyPassword = useCallback(() => {
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0, 15)
    window.navigator.clipboard.writeText(password)
  }, [password])

  const generatePassword = useCallback(() => {
    const passwd = []
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (numAllow) {
      str += '0123456789'
    }
    if (charAllow) {
      str += '~@#$%^&*()_-+=[]{}'
    }
    for (let i = 0; i < length; i++) {
      const charIdx = Math.floor((Math.random() * str.length) + 1)
      passwd.push(str.charAt(charIdx))
    }
    setPassword(passwd.join(''))
  }, [length, numAllow, charAllow, setPassword])

  useEffect(() => {
    generatePassword()
  }, [length, numAllow, charAllow, setPassword])

  return (
    <>
      <h1 className="flex justify-center text-3xl font-bold underline">
        Password Generator
      </h1>

      <div className="max-w-21 bg-gray-500 m-10 outline-none">

        <div>
          <input
            className="rounded-lg p-1.5 text-orange-400"
            type="text"
            placeholder="Password"
            readOnly
            value={password}
            ref={passwordRef}
          />

          <button
            className="bg-blue-400 p-1.5 rounded-lg active:bg-blue-600"
            onClick={() => copyPassword()}
          >
            Copy
          </button>
        </div>

        <div>
          <input
            type="range"
            id="length"
            value={length}
            min={6}
            max={50}
            onChange={(e) => setLength(Number(e.target.value))}
          />
          <label htmlFor="length">Length: {length}</label>
        </div>

        <div>
          <input
            type="checkbox"
            id="num"
            onChange={() => setNumAllow(prev => !prev)} />

          <label htmlFor="num">Numbers</label>
        </div>

        <div>
          <input
            type="checkbox"
            id="char"
            onChange={() => setCharAllow(prev => !prev)} />

          <label htmlFor="char">Characters</label>
        </div>

      </div >
    </>
  )
}

export default App