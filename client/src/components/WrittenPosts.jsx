import React from 'react'

const WrittenPosts = ({post}) => {
  return (
    <div className="bio" id="written-post">
          <div className="box-title">
            <h2>{post.title}</h2>
          </div>
          <div className="post-text">
            <h4>{post.text}</h4>
          </div>
        </div>
  )
}

export default WrittenPosts
