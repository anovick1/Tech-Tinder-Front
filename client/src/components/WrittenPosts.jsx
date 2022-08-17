import React from 'react'

const WrittenPosts = ({ post, currentUser, newPost }) => {
  return currentUser != null ? (
    <div className="post">
      <div className="bio" id="written-post">
        <div className="box-title">
          <h2>{post.title}</h2>
        </div>
        <div className="post-text">
          <h4>{post.text}</h4>
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

export default WrittenPosts
