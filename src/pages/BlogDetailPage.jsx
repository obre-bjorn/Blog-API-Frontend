import { ToastContainer,toast,Bounce } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";


import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import useFetch from '../hooks/useFetch'
import { useAuth } from "../utils/AuthContext"

import Input from "../components/Input"


function BlogDetailPage() {


    const {token} = useAuth()
    const {blogId} = useParams()
    const [formData,setFormData] = useState({content : ""})
    const [blog,setBlog] = useState()

    const{get : getBlogDetail, loading : blogLoading, error: blogError} = useFetch( `post/${blogId}`)
    const{post : postNewComment,loading: commentPostLoading,error: commentPostError} = useFetch(`post/${blogId}/comment`,token,{},false)

    useEffect ( ( ) => {


        async function fetchBlogData ( ){

            const response =  await getBlogDetail()
            
            if(response.ok) {

            const data = await response.json()
            console.log(data)
            setBlog(data.post)

            }else{


                console.error("Blog Detail Error: ", blogError)
        }


        }


        fetchBlogData()

    },[])

async function submitComment(e){

    e.preventDefault()

    const response  = await postNewComment(formData)
    console.log(response)

    if(response){

        console.log("Comment submitted");   
    }else{

        toast.error("Login to comment", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        })
    }

}

    const handleChange = function (e){
        const {name , value } = e.target
        
        setFormData({
            ...formData,
            [name] : value
        })

    }
    



  return (

      <div className="mt-8 w-screen px-56">

        
        {blogLoading && <h1> Loading Blog Data....</h1>}
        {blogError && <h1>An Error Occured while getting blog data</h1>}

        {blog && <>

        <h1 className="text-3xl text-center mb-5" >{blog.title}</h1>
        <div className="flex justify-end mb-8 gap-5">
            <p >pubished: {blog.createdAt}</p>
            <p>By: {blog.author.username}</p>
        </div>
        <p className="mb-8">{blog.content}</p>

            
            <Input handleChange={handleChange} inputName="content" inputType= "text" labelName="Write comment" placeholder="Write your comment here" value={formData.content} />
            <button onClick={submitComment} className="bg-purple-600 text-white px-5 py-3 rounded-sm" > Send</button>
            {commentPostLoading && <span>Submitting your comment</span> }
            {commentPostError && <span>Login to Comment</span>}

        <h1 className=" my-5 text-2xl text-purple-600">Comments:</h1>



        <div className="flex-col gap-5">

            

            {blog.comments.length > 0 ? 

                blog.comments.map((comment) => {
                    return (
                        <div key = {comment.id} className="bg-purple-300  rounded-lg mb-5 p-3 shadow-sm">
                            <p>{comment.content}</p>
                            <p className="text-right mt-2">By: {comment.author.username}</p>
                        </div>
                    )}) : 
                    
                <h1>No comments yet!</h1>
            
            }
            
        </div>
        </>}
        
        <ToastContainer/>
    </div>
  )
}

export default BlogDetailPage