import { useState } from "react"

import Form from "../components/Form"
import Input from "../components/Input"

function LoginPage() {

    const [formData,setFormData ]  = useState({
        username: "",
        password: ""
    })

    const handleChange = function(e){

        const {name , value} = e.target

        setFormData({
            ...formData,
            [name] : value
        })

    }

    const handleSubmit = function(e){
        e.preventDefault()
        console.log(formData)



    }


  return (
    <div className="w-screen h-screen flex items-center justify-center">

        <Form handleSubmit={handleSubmit}>
            <h1 className="text-3xl text-center text-purple-600 my-5" >Login</h1>
            <Input handleChange={handleChange} inputName="username" inputType="text" labelName="Username" placeholder="Enter username"/>
            <Input handleChange={handleChange} inputName="password" inputType="password" labelName="Password" placeholder="Enter password"/>

            <button className="bg-purple-600 text-white my-5 px-5 py-3 rounded-sm" >Login</button>
        </Form>

    </div>
  )
}

export default LoginPage