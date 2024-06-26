import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { Accordian, ImageSlider, LoadmoreData, RandomColor, StarRating } from './components/index.js'

const imageAPI = 'https://picsum.photos/v2/list';
const loadmoredataAPI = 'https://dummyjson.com/products?limit=20&skip='

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App />} >
    <Route path='accordian' element={<Accordian />} />
    <Route path='color' element={<RandomColor />} />
    <Route path='starrating' element={<StarRating noOfStars={5} />} />
    <Route path='imageslider' element={<ImageSlider url={imageAPI} page={2} limit={10} />} />

    <Route path="loadmoredata" element={<LoadmoreData api={loadmoredataAPI} />} />
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
