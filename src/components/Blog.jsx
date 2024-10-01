/* eslint-disable react/prop-types */

function Blog({blog}) {


  return (
    <div key= {blog.id} className="max-w-prose bg-purple-400 p-10 shadow-md rounded-md hover:scale-110 hover:transition-transform">
                <p className="text-2xl text-center mb-8"> {blog.title} </p>
                <p>{blog.content.slice(0,150) + "..."}</p>
            </div>
  )
}

export default Blog