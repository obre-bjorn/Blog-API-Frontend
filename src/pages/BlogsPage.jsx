import { useState } from "react"

function BlogsPage() {

    // const [blogs, setBlogs] = useState([])


    const blogs = [ {
        "id": 6,
        "title": "How to create an AI agent ",
        "content": "To create an AI agent we will use crewAI to create the agents. This will use a an LLM for instance openAI chat gPt  or claude or llama which is open source but resource intensive. \nThe agents are then trained to work togther to provide optimal feedback and results ",
        "published": true,
        "authorId": 1,
        "createdAt": "2024-09-26T20:02:26.227Z",
        "updatedAt": "2024-09-26T20:02:26.227Z"
    }, {
        "id": 7,
        "title": "How to create an AI agent ",
        "content": "To create an AI agent we will use crewAI to create the agents. This will use a an LLM for instance openAI chat gPt  or claude or llama which is open source but resource intensive. \nThe agents are then trained to work togther to provide optimal feedback and results ",
        "published": true,
        "authorId": 1,
        "createdAt": "2024-09-26T20:02:26.227Z",
        "updatedAt": "2024-09-26T20:02:26.227Z"
    },{
        "id": 8,
        "title": "How to create an AI agent ",
        "content": "To create an AI agent we will use crewAI to create the agents. This will use a an LLM for instance openAI chat gPt  or claude or llama which is open source but resource intensive. \nThe agents are then trained to work togther to provide optimal feedback and results ",
        "published": true,
        "authorId": 1,
        "createdAt": "2024-09-26T20:02:26.227Z",
        "updatedAt": "2024-09-26T20:02:26.227Z"
    },]


  return (
    <div className="grid grid-cols-3 gap-8 m-20">

        {blogs.map((blog) => {

           return ( <div key= {blog.id} className="max-w-prose bg-purple-400 p-10 shadow-md rounded-md hover:scale-110 hover:transition-transform">
                <p className="text-2xl text-center mb-8"> {blog.title} </p>
                <p>{blog.content.slice(0,150) + "..."}</p>
            </div>)


        })}


    </div>
  )
}

export default BlogsPage