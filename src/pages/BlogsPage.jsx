import { useEffect, useState } from "react"
import useFetch from "../hooks/useFetch"



function BlogsPage() {


    const {get,loading, error} = useFetch('posts','',{})
    const [blogs, setBlogs] = useState([])


    useEffect (( ) => {

        // Define an async function inside useEffect
        const fetchBlogs = async () => {
            try {
                const response = await get(); // Wait for the GET request

                if (response.ok) {
                    const data = await response.json();
                    setBlogs(data.posts); // Set the blogs data
                } else {
                    console.log("Error fetching data");
                }
            } catch (error) {
                console.log(error); // Log the error if there's an issue
            }
        };

        fetchBlogs();

    },[])






  return (
    <div className="grid grid-cols-3 gap-8 m-20">

        {loading && <h4>loading data</h4>}

        {error && <h4> An error occured</h4>} 

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