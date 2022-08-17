import React, { useState } from 'react'
import {
  DeleteVideoPost,
  GetImagePosts,
  GetVideoPosts,
  GetWrittenPosts
} from '../services/PostServices'

const VideoPosts = ({
  post,
  currentUser,
  newPost,
  setPosts,
  posts,
  setShownPosts
}) => {
  const getId = (link) => {
    let reverse = link.split('').reverse().join('')
    let id = ''
    for (let i = 0; i < 11; i++) {
      id = id + reverse[i]
    }
    let final = id.split('').reverse().join('')
    return 'https://www.youtube.com/embed/' + final
  }
  const [deletePost, setDeletePost] = useState(false)
  const cancel = () => {
    setDeletePost(false)
  }
  const allPosts = []
  const chicken = (res) => {
    for (let i = 0; i < res.length; i++) {
      allPosts.push(res[i])
    }
  }
  const updateP = async (sortPosts) => {
    const p = []
    for (let i = 0; i < sortPosts.length; i++) {
      if (parseInt(sortPosts[i].userId) === parseInt(currentUser.id)) {
        p.push(sortPosts[i])
      }
    }
    await setShownPosts(p)
  }
  const deletePostClick = async (id) => {
    await DeleteVideoPost(id)
    await GetImagePosts().then((res) => chicken(res))
    await GetVideoPosts().then((res) => chicken(res))
    await GetWrittenPosts().then((res) => chicken(res))
    const sortPosts = allPosts.slice().sort((a, b) => b.time - a.time)
    await setPosts(sortPosts)
    await updateP(sortPosts)
    setDeletePost(false)
  }
  return currentUser ? (
    <div className="post" key={post.text}>
      <div className="image-post">
        <div className="post-image">
          <iframe
            src={getId(post.video_url)}
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
      {post.userId === currentUser.id && !newPost ? (
        <div className="trashcan-icon" onClick={() => setDeletePost(true)}>
          <img src="https://cdn-icons-png.flaticon.com/512/2891/2891491.png" />
        </div>
      ) : (
        ''
      )}
      {deletePost ? (
        <div className="Delete" id="deletePost">
          <div>
            <h4>Are you sure you?</h4>
          </div>
          <div className="delete-buttons" id="delete-btn-post">
            <img
              src="https://freeiconshop.com/wp-content/uploads/edd/cross-flat.png"
              alt="edit"
              onClick={() => cancel()}
              id="cancel"
            />
            <img
              src="https://freeiconshop.com/wp-content/uploads/edd/checkmark-flat.png"
              alt="edit"
              onClick={() => deletePostClick(post.id)}
              id="confirm"
            />
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  ) : (
    ''
  )
}

export default VideoPosts
