import { Outlet } from "react-router-dom"

import { ToastContainer } from "react-toastify"
import Navbar from "../components/Navbar"


function HomePage() {
  return (
    <>
        <Navbar />
        <Outlet/>
        <ToastContainer/>
    </>
  )
}

export default HomePage