import React, { useState, useEffect } from 'react'

const ShowUserFeed = ({ currentUser, posts, users, displayedUser }) => {
  // const displayedUser = users[count]
  //// conditional that shows social link if not null
  const showIg = () => {
    if (displayedUser.ig_link != null) {
      return (
        <div className="social-img">
          <a href={displayedUser.ig_link} target="_blank" rel="noreferrer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/87/87390.png"
              alt="ig"
            />
          </a>
        </div>
      )
    }
  }
  const showFb = () => {
    if (displayedUser.fb_link != null) {
      return (
        <div className="social-img">
          <a href={displayedUser.fb_link} target="_blank" rel="noreferrer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1419/1419513.png"
              alt="ig"
            />
          </a>
        </div>
      )
    }
  }
  const showLi = () => {
    if (displayedUser.li_link != null) {
      return (
        <div className="social-img">
          <a href={displayedUser.li_link} target="_blank" rel="noreferrer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1384/1384088.png"
              alt="ig"
            />
          </a>
        </div>
      )
    }
  }

  const showGender = (gender) => {
    if (gender === 'Male') {
      return (
        <img
          src="https://cdn-icons-png.flaticon.com/512/4080/4080288.png"
          alt="male-icon"
        />
      )
    }
    if (gender === 'Female') {
      return (
        <img
          src="https://cdn-icons-png.flaticon.com/512/2284/2284886.png"
          alt="female-icon"
        />
      )
    }
    if (gender === 'Both') {
      return (
        <img
          src="https://cdn-icons-png.flaticon.com/512/2545/2545911.png"
          alt="both-icon"
        />
      )
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
          <div className="box-title">
            <h2>Bio</h2>
          </div>
          <div className="bio-text">
            <h4>{displayedUser.bio}</h4>
          </div>
        </div>
        <div className="stats">
          <div className="box-title">
            <h2>Stats</h2>
          </div>
          <div className="location-age-gender-interest-socials">
            <div className="location">
              <h4>
                Location: {displayedUser.city}, {displayedUser.state}
              </h4>
            </div>
            <div className="age">
              <h4>Age: {displayedUser.age}</h4>
            </div>
            <div className="gender">
              <h4>Gender:</h4>
              {showGender(displayedUser.gender)}
            </div>
            <div className="gender" id="orientation">
              <h4>Interested In: </h4>
              {showGender(displayedUser.orientation)}
            </div>
            <div className="socials">
              {showIg()}
              {showFb()}
              {showLi()}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ''
  )
}

export default ShowUserFeed
