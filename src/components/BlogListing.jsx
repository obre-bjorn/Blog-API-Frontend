
import Blog from "./Blog"


function BlogListing(posts) {

  const blogs = posts.map((post) => <Blog key={post.id} blog={post}/>)


  return (
    <>
      {blogs}
    </>
  )
}

export default BlogListing