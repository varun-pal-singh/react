import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <>
      <div>
        <h1>CustomApp!</h1>
      </div>
      <div>
        hello
      </div>
    </>
  )
}

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)

// const ReactElement = {
//   type: "a",
//   props: { 
//       href: 'https://google.com',
//       target: "_blank",
//   },
//   childern: "click me to visit google",
// }

const anotherUser = "chai aur code";

const reactElement = React.createElement(
  'a',
  {
    href: 'https://google.com',
    target: "_blank",
    id: "google",
  },
  "Click me to visit google",
  anotherUser, // Evaluated Expression
)

ReactDOM.createRoot(document.getElementById('root')).render(
    // <App/>
    reactElement
)
