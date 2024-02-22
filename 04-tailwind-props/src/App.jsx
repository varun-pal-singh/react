import './App.css'
import Card from './Card'

function App() {
  const user = "Varun";
  const username = ['chai aur code', 'Varun Pal Singh']
  return (
    <>
    <h1 className='bg-green-500 text-white p-4 rounded-lg mb-4'>Chai aur code | {user}</h1>
    <Card username={username[0]} btnText='click me'/>
    <Card username={username[1]} />
    </>
  )
}

export default App
