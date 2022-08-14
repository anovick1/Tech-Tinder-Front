import React, { useState, useEffect } from 'react'
import VideoPosts from './VideoPosts'
import ImagePosts from './ImagePosts'
import WrittenPosts from './WrittenPosts'
import { updateUser } from '../services/UserServices'
import { StayLogged } from '../services/Auth'

const ProfileEditForm = ({
  currentUser,
  posts,
  users,
  edit,
  setEdit,
  setCurrentUser
}) => {
  console.log(currentUser)
  const [formValues, setFormValues] = useState({
    id: parseInt(currentUser.id),
    firstName: 'Test',
    lastName: currentUser.lastName,
    email: currentUser.email,
    city: currentUser.city,
    state: currentUser.state,
    age: parseInt(currentUser.age),
    gender: currentUser.gender,
    orientation: currentUser.orientation,
    ig_link: currentUser.ig_link,
    fb_link: currentUser.fb_link,
    li_link: currentUser.li_link,
    pfp_link: currentUser.pfp_link,
    bio: currentUser.bio
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    await updateUser({
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      email: formValues.email,
      password: formValues.password,
      gender: formValues.gender,
      orientation: formValues.orientation,
      pfp_link: formValues.pfp_link,
      bio: formValues.bio
    })
    // change use state boolean to sign in
    // navigate('/signin')
  }

  const p = []
  for (let i = 0; i < posts.length; i++) {
    if (parseInt(posts[i].userId) === parseInt(currentUser.id)) {
      p.push(posts[i])
    }
  }
  const showIg = () => {
    if (currentUser.ig_link != null) {
      return (
        <div className="social-img">
          <a href={currentUser.ig_link} target="_blank" rel="noreferrer">
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
    if (currentUser.fb_link != null) {
      return (
        <div className="social-img">
          <a href={currentUser.fb_link} target="_blank" rel="noreferrer">
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
    if (currentUser.li_link != null) {
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
      return <ImagePosts post={post} displayedUser={currentUser} />
    }
    if (post.type === 'video') {
      return <VideoPosts post={post} displayedUser={currentUser} />
    }
    if (post.type === 'written') {
      return <WrittenPosts post={post} displayedUser={currentUser} />
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
  const editBtn = async () => {
    setEdit(false)
    updateUser(currentUser.id, formValues)
    await setCurrentUser(formValues)
    localStorage.clear()
    StayLogged(currentUser)
    console.log(currentUser)
  }
  return currentUser ? (
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
              {currentUser.firstName} {currentUser.lastName},{' EDIT'}
              {currentUser.age}
            </h1>
          </div>
          <div>
            <h3>
              {' '}
              {currentUser.city}, {currentUser.state}
            </h3>
          </div>
        </div>
        <div className="displayed_pfp">
          <img src={currentUser.pfp_link} alt="pfp" />
        </div>
        <div className="gender-orientation">
          <div className="gender">
            <h4>Gender:</h4>
            {showGender(currentUser.gender)}
          </div>
          <div className="gender" id="orientation">
            <h4>Interested in:</h4>
            {showGender(currentUser.orientation)}
          </div>
        </div>
        <div className="bio">
          <div className="box-title">
            <h2>Bio</h2>
          </div>
          <div className="bio-text">
            <h4>{currentUser.bio}</h4>
          </div>
        </div>
        {p.map((post, index) => (
          <div key={index}>{showPost(post)}</div>
        ))}
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
export default ProfileEditForm
