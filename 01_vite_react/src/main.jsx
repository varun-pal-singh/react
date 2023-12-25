import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// function MyApp(){
//   const username = "chai aur code "
//   return (
//     <div>
//       <h1>Custom App | Chai aur code</h1>
//     </div>
//   )
// }

// const reactEl = {
//   type : 'a',
//   props : {
//     href : 'https://www.google.com',
//     target : "_blank",
//   },
//   children : "Click me to visit google"
// }

const anotherEl = (
  <a href="https://google.com" target='_blank'>click me to visit google | anotherEl</a>
)

const anotherUser = " Chai aur reactEl2 "

const reactEl2 = React.createElement(
  "a", {
    "href": "https://www.google.com",
    "target" : "_blank",
  },
  "click me to visit google | reactEl2",
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(

    // <App/>
    // reactEl
    // anotherEl
    reactEl2
)
