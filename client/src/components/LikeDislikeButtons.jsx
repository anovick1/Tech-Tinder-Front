import React from 'react'
import { GetUsersLikes } from '../services/UserServices'

const LikeDislikeButtons = ({setCount, count, currentUser, displayedUser}) => {
  const likeClick = () => {
   let likeCount = count+1
setCount(likeCount)
GetUsersLikes(currentUser.id, displayedUser.id)
  }

  const dislikeClick = () => {
    let likeCount = count+1
    setCount(likeCount)
  }

  return currentUser?(
    <div>
      <img src="https://cdn-icons-png.flaticon.com/512/1216/1216686.png" id="like-icon" onClick={() => likeClick()} />
      <img src="https://cdn-icons-png.flaticon.com/128/1828/1828527.png" id="dislike-icon" onClick={() => dislikeClick()} />
    </div>
  ):(
    ''
  )
}

export default LikeDislikeButtons
