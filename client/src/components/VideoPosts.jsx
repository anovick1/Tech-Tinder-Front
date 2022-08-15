import React from 'react'

const VideoPosts = ({ post, displayedUser }) => {
  return (
    <div className="image-post">
      <div className="post-image">
        <iframe
          src={post.video_url}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullscreen="true"
        ></iframe>
      </div>
      <div className="image-text">
        <h4>{post.caption}</h4>
      </div>
    </div>
  )
}

export default VideoPosts
