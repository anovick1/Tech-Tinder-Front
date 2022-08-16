import React, { useState, useEffect } from 'react'
import { LikeUser, GetLikedMe, GetUserLikes } from '../services/UserServices'

const LikeDislikeButtons = ({
  setCount,
  count,
  currentUser,
  displayedUser,
  connections,
  setConnections,
  likes,
  likedMe
}) => {
  const [connect, setConnect] = useState(false)

  const likeClick = () => {
    let likeCount = count + 1

    // setCount(likeCount)
    LikeUser(currentUser.id, displayedUser.id)
  }

  const dislikeClick = () => {
    let likeCount = count + 1
    setCount(likeCount)
  }

  return currentUser ? (
    <div>
      <img
        src="https://cdn-icons-png.flaticon.com/512/1216/1216686.png"
        id="like-icon"
        onClick={() => likeClick()}
      />
      <img
        src="https://cdn-icons-png.flaticon.com/128/1828/1828527.png"
        id="dislike-icon"
        onClick={() => dislikeClick()}
      />
    </div>
  ) : (
    ''
  )
}

export default LikeDislikeButtons
