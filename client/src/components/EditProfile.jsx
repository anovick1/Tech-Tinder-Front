import React, { useState, useEffect } from 'react'
import VideoPosts from './VideoPosts'
import ImagePosts from './ImagePosts'
import WrittenPosts from './WrittenPosts'
import { updateUser } from '../services/UserServices'
import { StayLogged } from '../services/Auth'
import DeleteUser from './DeleteUser'
import EditGender from './EditGender'
import EditOrientation from './EditOrientation'

const ProfileEditForm = ({
  currentUser,
  posts,
  users,
  edit,
  setEdit,
  setCurrentUser,
  likes,
  setLikes,
  likedMe,
  setLikedMe,
  setViewedUsers,
  viewedUsers
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
  const p = []
  for (let i = 0; i < posts.length; i++) {
    if (parseInt(posts[i].userId) === parseInt(currentUser.id)) {
      p.push(posts[i])
    }
  }
  const showIg = () => {
    if (formValues.ig_link != null && formValues.ig_link.length > 1) {
      return (
        <div className="social-img">
          <a href={formValues.ig_link} target="_blank" rel="noreferrer">
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
    if (formValues.fb_link != null && formValues.fb_link.length > 1) {
      return (
        <div className="social-img">
          <a href={formValues.fb_link} target="_blank" rel="noreferrer">
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
    if (formValues.li_link != null && formValues.li_link.length > 1) {
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

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value })
  }

  const confirm = async () => {
    await updateUser(currentUser.id, formValues)
    await setCurrentUser(formValues)
    localStorage.clear()
    StayLogged(currentUser)
    await setEdit(false)
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
                {/* <label>First Name</label> */}
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
                {/* <label>Last Name</label> */}
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
                {/* <label>Age</label> */}
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
                {/* <label>City</label> */}
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
                {/* <label>State</label> */}
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
            <EditGender
              currentUser={currentUser}
              formValues={formValues}
              setFormValues={setFormValues}
            />
          </div>
          <div className="gender" id="orientation">
            <EditOrientation
              currentUser={currentUser}
              formValues={formValues}
              setFormValues={setFormValues}
            />
          </div>
        </div>
        <div className="bio">
          <div className="box-title" id="edit-bio">
            <div>
              <h2>Bio</h2>
            </div>
            <div>
              <p>{formValues.bio.length}/255</p>
            </div>
          </div>
          <div className="bio-text" id="edit-bio-text">
            <textarea
              type="text"
              value={formValues.bio}
              onChange={handleChange}
              id="bio"
              placeholder={'bio'}
              maxLength="255"
            ></textarea>
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
        <div className="edit-socials">
          <div className="pfp-label">
            <div>
              <div className="social-img">
                <a href={formValues.ig_link} target="_blank" rel="noreferrer">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/87/87390.png"
                    alt="ig"
                  />
                </a>
              </div>
            </div>
            <div>
              <input
                type="text"
                defaultValue={formValues.ig_link}
                onChange={handleChange}
                id={'ig_link'}
                placeholder={'Instagram URL'}
                className="input-box"
              />
            </div>
          </div>
          <div className="pfp-label">
            <div>
              <div className="social-img">
                <a href={formValues.fb_link} target="_blank" rel="noreferrer">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1419/1419513.png"
                    alt="ig"
                  />
                </a>
              </div>
            </div>
            <div>
              <input
                type="text"
                defaultValue={formValues.fb_link}
                onChange={handleChange}
                id={'fb_link'}
                placeholder={'Facebook URL'}
                className="input-box"
              />
            </div>
          </div>
          <div className="pfp-label">
            <div className="social-img">
              <a href="yes" target="_blank" rel="noreferrer">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1384/1384088.png"
                  alt="ig"
                />
              </a>
            </div>
            <div>
              <input
                type="text"
                defaultValue={formValues.li_link}
                onChange={handleChange}
                id={'li_link'}
                placeholder={'LinkedIn URL'}
                className="input-box"
              />
            </div>
          </div>
        </div>
        <DeleteUser
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
          likes={likes}
          setLikes={setLikes}
          likedMe={likedMe}
          setLikedMe={setLikedMe}
          setViewedUsers={setViewedUsers}
          viewedUsers={viewedUsers}
        />
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
      </div>
    </div>
  ) : (
    ''
  )
}
export default ProfileEditForm
