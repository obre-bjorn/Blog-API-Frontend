import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


import './index.css'
import { AuthProvider } from './utils/AuthContext.jsx'
import HomePage from './pages/HomePage.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import BlogsPage from './pages/BlogsPage.jsx'
import BlogDetailPage from './pages/BlogDetailPage.jsx'




const router = createBrowserRouter ([
    {
      path: "/",
      element : <HomePage/>,
      children : [
        {
          path: "/blogs",
          element : <BlogsPage />

        },
        {
          path: "/blog/:blogId",
          element : <BlogDetailPage />

        },

      ],
      errorElement : <ErrorPage/>
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
    <AuthProvider>
      <RouterProvider  router={router}/>
    </AuthProvider>
  </StrictMode>,
)
