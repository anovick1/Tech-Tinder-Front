import React, { useState, useEffect } from 'react'
import {
  LikeUser,
  ViewUser,
  GetLikedMe,
  GetUserLikes,
  GetViewedUsers
} from '../services/UserServices'

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
  setLikedMe,
  setLikes,
  setViewedUsers
}) => {
  const likeClick = async () => {
    await LikeUser(currentUser.id, displayedUser.id)
    await GetLikedMe(currentUser.id).then((res) => setLikedMe(res[0].liked_me))
    await GetUserLikes(currentUser.id).then((res) => setLikes(res[0].likes))
    for (let i = 0; i < likedMe.length; i++) {
      if (likedMe[i].id === displayedUser.id) {
        console.log(likedMe[i])
        setConnect(true)
        let c = connections
        c.push(likedMe[i].id)
        setConnections(c)
        return
      }
    }
    if (!connect) {
      console.log('here')
      let likeCount = count + 1
      setCount(likeCount)
    }
  }

  const dislikeClick = async () => {
    ViewUser(currentUser.id, displayedUser.id)
    await GetViewedUsers(currentUser.id).then((res) =>
      setViewedUsers(res[0].viewed)
    )
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
