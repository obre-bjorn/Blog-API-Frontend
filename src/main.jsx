import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


import './index.css'
import HomePage from './pages/HomePage.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'




const router = createBrowserRouter ([
    {
      path: "/",
      element : <HomePage/>,
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
