import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

import { toast, Bounce, ToastContainer } from "react-toastify"

import Form from "../components/Form"
import Input from "../components/Input"
import { useAuth } from "../utils/AuthContext"
import 'react-toastify/dist/ReactToastify.css';


function LoginPage() {


    const {login} = useAuth()

    const [formData,setFormData ]  = useState({
        username: "",
        password: ""
    })

    const navigate = useNavigate()


    const handleChange = function(e){

        const {name , value} = e.target

        setFormData({
            ...formData,
            [name] : value
        })

    }

    const handleSubmit = async function(e){


        e.preventDefault()

        try {
            
            const result = await login(formData)
        
            if(result.ok){
                
                toast.success("Login Successful", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                })

                
                navigate('/')

            }


        } catch(err) {
            console.error('Login Failed: ', err)
        }

    }


  return (
    <div className="w-screen h-screen flex items-center justify-center">

        <Form handleSubmit={handleSubmit}>
            <h1 className="text-3xl text-center text-purple-600 my-5" >Login</h1>
            <Input handleChange={handleChange} inputName="username" inputType="text" labelName="Username" placeholder="Enter username"/>
            <Input handleChange={handleChange} inputName="password" inputType="password" labelName="Password" placeholder="Enter password"/>

            <span>
                <button className="bg-purple-600 text-white my-5 px-5 py-3 rounded-sm">Login</button>
                <Link to="/register" className="text-purple-600 underline ml-6 ">Register</Link>
            </span>
        </Form>

        {/* <ToastContainer/> */}
    </div>
  )
}

export default LoginPage