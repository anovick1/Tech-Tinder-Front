import React from 'react'

const LikeDislikeButtons = ({setCount}) => {
  const likeClick = () => {

  }

  const dislikeClick = () => {

  }

  return (
    <div>
      <img src="https://cdn-icons-png.flaticon.com/512/1216/1216686.png" id="like-icon" onClick={() => likeClick()} />
      <img src="https://cdn-icons-png.flaticon.com/128/1828/1828527.png" id="dislike-icon" onClick={() => dislikeClick()} />
    </div>
  )
}

export default LikeDislikeButtons
