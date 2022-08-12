import React, { useState, useEffect } from 'react'
import VideoPosts from './VideoPosts'
import ImagePosts from './ImagePosts'
import WrittenPosts from './WrittenPosts'

const ShowUserFeed = ({ currentUser, posts, users, displayedUser }) => {
  const p = []
  for (let i = 0; i < posts.length; i++) {
    if (posts.userId === displayedUser.id) {
      p.push(posts[i])
    }
  }
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
          <div>
            <h1>
              {displayedUser.firstName} {displayedUser.lastName},{' '}
              {displayedUser.age}
            </h1>
          </div>
          <div>
            <h3>
              {' '}
              {displayedUser.city}, {displayedUser.state}
            </h3>
          </div>
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
            <div className="location-age">
              <div className="location">
                <h4>
                  <span id="stat-title">Location</span>: {displayedUser.city},{' '}
                  {displayedUser.state}
                </h4>
              </div>
              <div className="age">
                <h4>
                  <span id="stat-title">Age</span>: {displayedUser.age}
                </h4>
              </div>
            </div>
            <div className="gender-orientation">
              <div className="gender">
                <h4>
                  <span id="stat-title">Gender</span>:
                </h4>
                {showGender(displayedUser.gender)}
              </div>
              <div className="gender" id="orientation">
                <h4>
                  <span id="stat-title">Interested in</span>:
                </h4>
                {showGender(displayedUser.orientation)}
              </div>
            </div>

            <div className="socials">
              {showIg()}
              {showFb()}
              {showLi()}
            </div>
          </div>
        </div>
        {/* MAP POSTS HERE */}
      </div>
    </div>
  ) : (
    ''
  )
}

export default ShowUserFeed
