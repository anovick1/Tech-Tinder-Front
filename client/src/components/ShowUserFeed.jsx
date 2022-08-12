import React, { useState, useEffect } from 'react'

const ShowUserFeed = ({ currentUser, posts, users, count, setCount }) => {
  const displayedUser = users[count]
  //// conditional that shows social link if not null
  const showIg = () => {
    if (displayedUser.ig_link != null) {
      return <div>{displayedUser.ig_link}</div>
    }
  }
  const showFb = () => {
    if (displayedUser.fb_link != null) {
      return <div>{displayedUser.fb_link}</div>
    }
  }
  const showLi = () => {
    if (displayedUser.li_link != null) {
      return <div>{displayedUser.li_link}</div>
    }
  }

  return currentUser && displayedUser ? (
    <div className="feed">
      <div className="profile">
        <div className="ShownUserName">
          <h1>
            {displayedUser.firstName} {displayedUser.lastName}
          </h1>
        </div>
        <div className="displayed_pfp">
          <img src={displayedUser.pfp_link} alt="pfp" />
        </div>
        <div className="bio">
          <h2>Bio</h2>
          <h4>displayedUser.bio</h4>
        </div>
        <div className="stats">
          <h4>
            Location: {displayedUser.city}, {displayedUser.state}
          </h4>
          <h4>Age: {displayedUser.age}</h4>
          <h4>Interested In: {displayedUser.orientation}</h4>
          <div className="socials">
            {showIg()}
            {showFb()}
            {showLi()}
          </div>
        </div>
      </div>
    </div>
  ) : (
    ''
  )
}

export default ShowUserFeed
