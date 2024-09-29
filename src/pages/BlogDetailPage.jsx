import { useState } from "react"


import Input from "../components/Input"


function BlogDetailPage() {

    const [formData,setFormData] = useState({content : ""})


    const handleChange = function (e){
        const {name , value } = e.target
        
        setFormData({
            ...formData,
            [name] : value
        })

    }
    

    const blog =  {
        "id": 6,
        "title": "How to create an AI agent ",
        "content": "To create an AI agent we will use crewAI to create the agents. This will use a an LLM for instance openAI chat gPt  or claude or llama which is open source but resource intensive. \nThe agents are then trained to work togther to provide optimal feedback and results ",
        "published": true,
        "authorId": "Bjorn Obare",
        "createdAt": "2024-09-26T20:02:26.227Z",
        "updatedAt": "2024-09-26T20:02:26.227Z",
        "comments" : [
            {
                id : 1,
                content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut hic tenetur eius.",
                author: "John McGinn"
            },
            {
                id : 2,
                content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut hic tenetur eius.",
                author: "William Saliba"
            },
            {
                id : 3,
                content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut hic tenetur eius.",
                author: "Martin Odegaard"
            },
           
        ]
    }


  return (
    <div className="mt-8 w-screen px-56">
        <h1 className="text-3xl text-center mb-5" >{blog.title}</h1>
        <div className="flex justify-end mb-8 gap-5">
            <p >pubished: {blog.createdAt}</p>
            <p>By: {blog.authorId}</p>
        </div>
        <p className="mb-8">{blog.content}</p>

        
            <Input handleChange={handleChange} inputName="content" inputType= "text" labelName="Write comment" placeholder="Write your comment here"/>
            <button className="bg-purple-600 text-white px-5 py-3 rounded-sm" > Send</button>

        <h1 className=" my-5 text-2xl text-purple-600">Comments:</h1>



        <div className="flex-col gap-5">

            {blog.comments.map((comment) => {
                return (
                    <div key = {comment.id} className="bg-purple-300  rounded-lg mb-5 p-3 shadow-sm">
                        <p>{comment.content}</p>
                        <p className="text-right mt-2">By: {comment.author}</p>
                    </div>
                )
            })}
            
        </div>

    </div>
  )
}

export default BlogDetailPage