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
  const [formValues, setFormValues] = useState({
    id: parseInt(currentUser.id),
    firstName: currentUser.firstName,
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
  const [genderMClick, setGenderMClick] = useState(
    currentUser.gender === 'Male'
  )
  const [genderFClick, setGenderFClick] = useState(
    currentUser.gender === 'Female'
  )
  const [orientationMClick, setOrientationMClick] = useState(
    currentUser.orientation === 'Male'
  )
  const [orientationFClick, setOrientationFClick] = useState(
    currentUser.orientation === 'Female'
  )

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

  const onClickGender = () => {
    console.log('rest')
    if (genderMClick === true) {
      setGenderMClick(false)
      setGenderFClick(true)
    } else {
      setGenderMClick(true)
      setGenderFClick(false)
    }
  }

  const showGender = (gender) => {
    if (genderMClick === true) {
      return (
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/4080/4080288.png"
            alt="male-icon"
            id="selected-gender"
            onClick={() => onClickGender()}
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/2284/2284886.png"
            alt="female-icon"
            onClick={() => onClickGender()}
          />
        </div>
      )
    } else {
      return (
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/4080/4080288.png"
            alt="male-icon"
            onClick={() => onClickGender()}
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/2284/2284886.png"
            alt="female-icon"
            id="selected-gender"
            onClick={() => onClickGender()}
          />
        </div>
      )
    }
  }
  const onClickOrientation = () => {
    console.log('rest')
    if (genderMClick === true) {
      setOrientationMClick(false)
      setOrientationFClick(true)
    } else {
      setOrientationMClick(true)
      setOrientationFClick(false)
    }
  }

  const showOrientation = (gender) => {
    if (genderMClick === true) {
      return (
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/4080/4080288.png"
            alt="male-icon"
            id="selected-gender"
            onClick={() => onClickGender()}
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/2284/2284886.png"
            alt="female-icon"
            onClick={() => onClickGender()}
          />
        </div>
      )
    } else {
      return (
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/4080/4080288.png"
            alt="male-icon"
            onClick={() => onClickGender()}
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/2284/2284886.png"
            alt="female-icon"
            id="selected-gender"
            onClick={() => onClickGender()}
          />
        </div>
      )
    }
  }

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value })
  }
  const confirm = async () => {
    setEdit(false)
    await updateUser(currentUser.id, formValues)
    setCurrentUser(formValues)
    localStorage.clear()
    StayLogged(currentUser)
  }
  const cancel = async () => {
    setEdit(false)
  }
  return currentUser ? (
    <div className="feed">
      <div className="profile">
        <div className="edit-icon">
          <img
            src="https://freeiconshop.com/wp-content/uploads/edd/cross-flat.png"
            alt="edit"
            onClick={() => cancel()}
          />
          <img
            src="https://freeiconshop.com/wp-content/uploads/edd/checkmark-flat.png"
            alt="edit"
            onClick={() => confirm()}
          />
        </div>
        <div className="ShownUserName">
          <h1>
            {formValues.firstName} {formValues.lastName},{formValues.age}
          </h1>
          <h3>
            {' '}
            {formValues.city}, {formValues.state}
          </h3>
          <div>
            <div className="first-last-age">
              <div className="input-label">
                <input
                  type="text"
                  value={formValues.firstName}
                  onChange={handleChange}
                  id="firstName"
                  placeholder={'First Name'}
                  className="input-box"
                />
                <label>First Name</label>
              </div>
              <div className="input-label">
                <input
                  type="text"
                  defaultValue={formValues.lastName}
                  onChange={handleChange}
                  id={'lastName'}
                  placeholder={'Last Name'}
                  className="input-box"
                />
                <label>Last Name</label>
              </div>
              <div className="input-label">
                <input
                  type="number"
                  defaultValue={formValues.age}
                  onChange={handleChange}
                  id={'age'}
                  placeholder={'Age'}
                  className="input-box"
                />
                <label>Age</label>
              </div>
            </div>
            <div className="city-state">
              <div className="input-label">
                <input
                  type="text"
                  defaultValue={formValues.city}
                  onChange={handleChange}
                  id={'city'}
                  placeholder={'City'}
                  className="input-box"
                />
                <label>City</label>
              </div>
              <div className="input-label">
                <input
                  type="text"
                  defaultValue={formValues.state}
                  onChange={handleChange}
                  id={'state'}
                  placeholder={'State'}
                  className="input-box"
                />
                <label>State</label>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <div className="displayed_pfp">
          <img src={formValues.pfp_link} alt="pfp" />
        </div>
        <div className="pfp-label">
          <div>
            <label>Profile Picture URL:</label>
          </div>
          <div>
            <input
              type="text"
              defaultValue={formValues.pfp_link}
              onChange={handleChange}
              id={'pfp_link'}
              placeholder={'Profile Picture URL'}
              className="input-box"
            />
          </div>
        </div>
        <div className="gender-orientation">
          <div className="gender">
            <h4>Gender:</h4>
            {showGender(currentUser.gender)}
          </div>
          <div className="gender" id="orientation">
            <h4>Interest:</h4>
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
