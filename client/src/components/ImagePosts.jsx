import React from 'react'

const ImagePosts = ({ post, displayedUser }) => {
  return (
    <div className="image-post">
      <div className="post-image">
        <img src={post.img_url} />
      </div>
      <div className="image-text">
        <h4>{post.caption}</h4>
      </div>
    </div>
  )
}

export default ImagePosts
