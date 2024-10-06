/* eslint-disable react/prop-types */

import Blog from "./Blog"


function BlogListing({posts}) {

  const blogs = posts ? posts.map((post) => <Blog key={post.id} blog={post} />) : <h1>NO POST AVAILABLE </h1>


  return (
    <>
      {blogs}
    </>
  )
}

export default BlogListing