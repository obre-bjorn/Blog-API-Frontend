import { useEffect, useState } from 'react'
import {useFetch} from '../hooks/useFetch'


function BlogDetail({blogId}) {

    const{get, loading, error} = useFetch('blog/' + blogId)
    const [blog,setBlog] = useState(null)


    useEffect ( ( ) => {


        async function fetchBlogData ( ){

           const response =  await get()
            
           if(response.ok) {

            const data = await response.json()
            setBlog(data)

           }else{


            console.log("Blod Detail Error:", error)
           }


        }


        fetchBlogData()

    },[])




  return (

    {if(loading){
        <h1>Loading....</h1>
    }


    if(error){
        <h1>An error occured</h1>
    }

    if(blog){
        <h1>{blog.title}</h1>
    }
}
    
  )
}

export default BlogDetail