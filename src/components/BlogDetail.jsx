/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import {useFetch} from '../hooks/useFetch'
import Input from './Input'


function BlogDetail({blogId}) {

    const{get : getBlogDetail, loading : blogLoading, error: blogError} = useFetch( `blog/${blogId}`)
    const{post : postNewComment,loading: commentPostLoading,error: commentPostError} = useFetch(`post/${blogId}/comment`)
    const [blog,setBlog] = useState(null)


    useEffect ( ( ) => {


        async function fetchBlogData ( ){

            const response =  await getBlogDetail()
            
            if(response.ok) {

            const data = await response.json()
            setBlog(data)

            }else{


                console.error("Blod Detail Error: ", blogError)
        }


        }


        fetchBlogData()

    },[])

async function submitComment(e){

    e.preventDefault()

    const response  = await postNewComment()

    if(response.ok){
        console.log("Comment submitqted");
        
    }


}


    return (

        <div className="mt-8 w-screen px-56">

            {blogLoading && <h4>loading data</h4>}

            {blogError && <h4> An error occured</h4>} 
        <h1 className="text-3xl text-center mb-5" >{blog.title}</h1>
        <div className="flex justify-end mb-8 gap-5">
            <p >pubished: {blog.createdAt}</p>
            <p>By: {blog.authorId}</p>
        </div>
        <p className="mb-8">{blog.content}</p>

        
            <Input handleChange={submitComment} inputName="content" inputType= "text" labelName="Write comment" placeholder="Write your comment here"/>
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

export default BlogDetail