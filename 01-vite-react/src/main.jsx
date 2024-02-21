import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const reactElement = {
  type: 'a',
  props: {
      href: 'https:www.google.com',
      target: '_blank',
  },
  children: 'click me to visit google'
}

const reactElement1 = (
  <a href="https://google.com" target='_blank'>click me to visit google</a>
)

const reactElement2 = React.createElement(
  'a',
  {
    'href' : 'www.google.com',
    'target': '_blank', 
  },
  'click me to visit google',

)

const reactElement3 = React.createElement(
  'p',
  {
    // style: 'backgroundColor: black',
  },
  `P tag | Chai aur react`
)

ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement3
)
