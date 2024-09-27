import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


import './index.css'
import Homepage from './pages/HomePage.jsx'
import 




const router = createBrowserRouter ([
  {
    path: "/",
    element : <Homepage/>,
    errorElement : 
  },
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider  router={router}/>
  </StrictMode>,
)
