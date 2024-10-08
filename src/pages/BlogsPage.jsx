import { useEffect, useState } from "react"
import useFetch from "../hooks/useFetch"
import BlogListing from "../components/BlogListing"




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
                    console.log("Error: ",error)
                    console.log("Error fetching data");
                }
            } catch (error) {
                console.log(error); // Log the error if there's an issue
            }
        };

        fetchBlogs();

    },[])






  return (
    <>


        <div className="container mx-auto px-4">

            <h1 className= "text-3xl">{`RECENT POSTS:`}</h1>

            <div className=" grid gap-8 items-center place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-20 ">


                {loading && <h4>loading data</h4>} 

                {error && <h4> An error occured</h4>} 

                <BlogListing posts = {blogs}/>


            </div>

        </div>

    </>
  )
}

export default BlogsPage