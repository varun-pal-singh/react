import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import Layout from './Layout.jsx'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import './index.css'
import {Home, Contact, About, User, Github} from '../src/components/index.js'
import { githubDataLoader } from './components/Github.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contact/>} />
    
      <Route path='user/:userId/name/:userName' element={<User/>}/>
      <Route path='github' element={<Github/>} loader={githubDataLoader} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
