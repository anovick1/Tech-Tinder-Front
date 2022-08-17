import React from 'react'

const ImagePosts = ({ post, displayedUser, currentUser, newPost }) => {
  return currentUser ? (
    <div className="post">
      <div className="image-post">
        <div className="post-image">
          <img src={post.img_url} />
        </div>
        <div className="image-text">
          <h4>{post.caption}</h4>
        </div>
      </div>
      {post.userId === currentUser.id && !newPost ? (
        <div className="trashcan-icon">
          <img src="https://cdn-icons-png.flaticon.com/512/2891/2891491.png" />
        </div>
      ) : (
        ''
      )}
    </div>
  ) : (
    ''
  )
}

export default ImagePosts
