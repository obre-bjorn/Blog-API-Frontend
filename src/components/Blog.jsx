/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"


function Blog({blog}) {


  return (
    <Link to={`/blog/${blog.id}`} key= {blog.id} className="w-70 h-80  bg-purple-400 p-4 shadow-md rounded-md hover:scale-110 hover:transition-transform">
        <p className="text-2xl text-center mb-8"> {blog.title} </p>
        <p>{blog.content.slice(0,150) + "..."}</p>
    </Link>
  )
}

export default Blog