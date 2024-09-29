
import { useState } from "react"
import Form from "../components/Form"
import Input from "../components/Input"

function RegisterPage() {

  const [formData, setFormData] = useState({

    username: "",
    email : "",
    password : ""

  })



const handleChange = function (e) {

  const {name, value}  = e.target

  console.log(value)

  setFormData({
    ...formData,
    [name] :  value
  })


}

  const handleSubmit = function (e){

    e.preventDefault()

    console.log(formData)
    

  }



  return (

    <>
      <h1>Register Here</h1>
      <Form handleSubmit={handleSubmit}>

        <Input inputName="username" inputType="text" labelName="Username" placeholder={"Enter your Username"} handleChange={handleChange} value = {formData.username}/>
        <Input inputName="email" inputType="email" labelName="Email Address" placeholder="Enter your email Address" handleChange={handleChange} value = {formData.email}/>
        <Input inputName="password" inputType="password" labelName="Password" placeholder="*********" handleChange={handleChange} value = {formData.password}/>

        <button>Sign up</button>
      </Form>

    </>

  )
}

export default RegisterPage