import React, { useState, useEffect } from 'react'

const ShowUserFeed = ({ currentUser, posts, users, count, setCount }) => {
  const displayedUser = users[count]

  return (
    <div className="profile">
      <div className="name,bio,stats">
        <h1>
          {displayedUser.firstName} {displayedUser.lastName}
        </h1>
        <img src={displayedUser.pfp_link} alt="pfp" />
        <h4>
          Location: {displayedUser.city}, {displayedUser.state}
        </h4>
        <h4>Age: {displayedUser.age}</h4>
        <h4>Interested In: {displayedUser.orientation}</h4>
      </div>
    </div>
  )
}

export default ShowUserFeed
