/* eslint-disable react/prop-types */


function Comment({comment}) {
  return (
    <div key = {comment.id} className="bg-purple-300  rounded-lg mb-5 p-3 shadow-sm">
                        <p>{comment.content}</p>
                        <p className="text-right mt-2">By: {comment.author}</p>
                    </div>
)
}

export default Comment