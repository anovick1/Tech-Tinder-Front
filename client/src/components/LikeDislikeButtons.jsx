import React, { useState, useEffect } from 'react'
import { LikeUser, ViewUser } from '../services/UserServices'

const LikeDislikeButtons = ({
  setCount,
  count,
  currentUser,
  displayedUser,
  connections,
  setConnections,
  likes,
  likedMe,
  connect,
  setConnect,
  set
}) => {
  const likeClick = () => {
    LikeUser(currentUser.id, displayedUser.id)
    ViewUser(currentUser.id, displayedUser.id)
    for (let i = 0; i < likedMe.length; i++) {
      if (likedMe[i].id === displayedUser.id) {
        setConnect(true)
        let c = connections
        c.push(likedMe[i].id)
        setConnections(c)
      }
    }
  }

  const dislikeClick = () => {
    ViewUser(currentUser.id, displayedUser.id)
    let likeCount = count + 1
    setCount(likeCount)
  }

  return currentUser && !connect ? (
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
