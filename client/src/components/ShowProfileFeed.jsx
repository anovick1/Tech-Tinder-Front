import React, { useState, useEffect } from 'react'
import VideoPosts from './VideoPosts'
import ImagePosts from './ImagePosts'
import WrittenPosts from './WrittenPosts'
import CreatePostForm from './CreatePostForm'

const ShowProfileFeed = ({
  currentUser,
  posts,
  users,
  displayedUser,
  edit,
  setEdit,
  setPosts
}) => {
  const p = []
  for (let i = 0; i < posts.length; i++) {
    if (parseInt(posts[i].userId) === parseInt(displayedUser.id)) {
      p.push(posts[i])
    }
  }
  const showIg = () => {
    if (displayedUser.ig_link != null && displayedUser.ig_link.length > 1) {
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
    if (displayedUser.fb_link != null && displayedUser.fb_link.length > 1) {
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
    if (displayedUser.li_link != null && displayedUser.li_link.length > 1) {
      return (
        <div className="social-img">
          <a href="yes" target="_blank" rel="noreferrer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1384/1384088.png"
              alt="ig"
            />
          </a>
        </div>
      )
    }
  }

  const showPost = (post) => {
    if (post.type === 'image') {
      return <ImagePosts post={post} displayedUser={displayedUser} />
    }
    if (post.type === 'video') {
      return <VideoPosts post={post} displayedUser={displayedUser} />
    }
    if (post.type === 'written') {
      return <WrittenPosts post={post} displayedUser={displayedUser} />
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

  const editBtn = () => {
    setEdit(true)
  }

  return currentUser && displayedUser ? (
    <div className="feed">
      <div className="profile">
        <div className="edit-icon">
          <img
            src="https://i.imgur.com/Kmxk7OM.png"
            alt="edit"
            onClick={() => editBtn()}
          />
        </div>
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
        <div className="gender-orientation">
          <div className="gender">
            <h4>Gender:</h4>
            {showGender(displayedUser.gender)}
          </div>
          <div className="gender" id="orientation">
            <h4>Interested in:</h4>
            {showGender(displayedUser.orientation)}
          </div>
        </div>
        <div className="bio">
          <div className="box-title">
            <h2>Bio</h2>
          </div>
          <div className="bio-text">
            <h4>{displayedUser.bio}</h4>
          </div>
        </div>
        <CreatePostForm currentUser={currentUser} setPosts={setPosts} />
        {p.map((post, index) => (
          <div key={index}>{showPost(post)}</div>
        ))}
        <div>
          
        </div>
        <div className="socials">
          {showIg()}
          {showFb()}
          {showLi()}
        </div>
      </div>
    </div>
  ) : (
    ''
  )
}

export default ShowProfileFeed
