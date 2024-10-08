
import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import useFetch from "../hooks/useFetch"

import Form from "../components/Form"
import Input from "../components/Input"

function RegisterPage() {

  const navigate = useNavigate()
  const {post,loading, error} = useFetch('register', "",{}, false)



  const [formData, setFormData] = useState({

    username: "",
    email : "",
    password : ""

  })

  



const handleChange = function (e) {

  const {name, value}  = e.target

  setFormData({
    ...formData,
    [name] :  value
  })


}

  const handleSubmit = async function (e){

    e.preventDefault()

    try {
      
      const response = await post(formData)

      if(response.status == 200){

        navigate('/login')
        console.log("Registered successfully")


      }


    } catch (error) {
      console.log("Failed to Register ", error )
    }
    

  }



  return (

    <div className="w-screen h-screen flex items-center justify-center ">

      {error && <h3>An Error occured</h3>}
      
      <Form handleSubmit={handleSubmit}>
        <h1 className="text-center text-2xl my-5 text-purple-600" >Register Here</h1>

        <Input inputName="username" inputType="text" labelName="Username" placeholder={"Enter your Username"} handleChange={handleChange} value = {formData.username}/>
        <Input inputName="email" inputType="email" labelName="Email Address" placeholder="Enter your email Address" handleChange={handleChange} value = {formData.email}/>
        <Input inputName="password" inputType="password" labelName="Password" placeholder="*********" handleChange={handleChange} value = {formData.password}/>

        <button className="my-5 px-5 py-3 mx-auto bg-purple-600 text-white rounded-sm" disabled={loading}>Sign up</button>
        <Link to="/login" className="text-purple-600 underline ml-6 ">Login</Link>
      </Form>

    </div>

  )
}

export default RegisterPage