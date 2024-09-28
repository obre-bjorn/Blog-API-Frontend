import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


import './index.css'
import Homepage from './pages/HomePage.jsx'
import ErrorPage from './pages/ErrorPage.jsx'




const router = createBrowserRouter ([
    {
      path: "/",
      element : <Homepage/>,
      errorElement : ErrorPage
    },
    {
      path: "/login",
      element: <LoginPage/>
    },
    {
      path: "/register",
      element: <RegisterPage/>
    }
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider  router={router}/>
  </StrictMode>,
)
