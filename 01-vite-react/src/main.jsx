import React from 'react'
import ReactDOM from 'react-dom/client'
// import {jsx as _jsx } from 'react/jsx-runtime.js'
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
  <a href="https://google.com" target='_blank'
    style={{backgroundColor: "black", color: "red"}}
  >click me to visit google</a>
)

const reactElement2 = React.createElement(
  'a',
  {
    'href' : 'www.google.com',
    'target': '_blank', 
  },
  'click me to visit google',

)

const user = "Varun"
const aTag = React.createElement(
  'a',
  {href: "google.com", target: '_blank'},
  `click to visit google`
)

const reactElement3 = React.createElement(
  // tag name
  'p',
  // props
  {
    id: "para",
    style: {                  // style is also a object
      backgroundColor: 'red',
      color: "pink",
    }
  },
  // children
  `P tag | Chai aur react ${{aTag}}`,
  // now comes evaluated expression (final value of variable)
  user,
  aTag
)

ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement3
)
