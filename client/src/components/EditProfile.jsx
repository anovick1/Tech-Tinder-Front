import React from 'react'
import { useNavigate } from 'react-router-dom'
import { RegisterUser } from '../services/Auth'
import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const ProfileEditForm = (currentUser, edit, setEdit) => {
  let navigate = useNavigate()
  let {id, index} = useParams()
  console.log(currentUser)
  const [formValues, setFormValues] = useState({
    firstName: currentUser.firstName,
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
    orientation: '',
    city: '',
    state: '',
    age: '',
    ig_link: '',
    fb_link: '',
    li_link: '',
    pfp_link:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLOpe1MAvkqPwwTU0KLsa6FMh1rAZWg3OR_Q&usqp=CAU',
    bio: 'Just here to have fun!'
  })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterUser({
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      email: formValues.email,
      password: formValues.password,
      gender: formValues.gender,
      orientation: formValues.orientation,
      pfp_link:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLOpe1MAvkqPwwTU0KLsa6FMh1rAZWg3OR_Q&usqp=CAU',
      bio: 'Just here to have fun!'
    })
    setFormValues({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      gender: '',
      orientation: ''
    })
    // change use state boolean to sign in
    // navigate('/signin')
  }

  return currentUser?(
    <div className="signin col">
      <div className="card-overlay centered">
        <form className="col" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label>First Name</label>
            <input
              onChange={handleChange}
              name="firstName"
              type="text"
              placeholder={currentUser.firstName}
              value={currentUser.firstName}
              required
            />
          </div>
          <div className="input-wrapper">
            <label>Last Name</label>
            <input
              onChange={handleChange}
              name="lastName"
              type="text"
              placeholder="Smith"
              value={formValues.lastName}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="example@example.com"
              value={formValues.email}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="gender">Gender</label>
            <input
              onChange={handleChange}
              type="text"
              name="gender"
              value={formValues.confirmPgenderassword}
              required
            />
            {/* 
            <label class="container">
              Male
              <input
                type="checkbox"
                checked="checked"
                value={formValues.gender}
              />
              <span class="checkmark"></span>
            </label>

            <label class="container">
              Female
              <input type="checkbox" value={formValues.gender} />
              <span class="checkmark"></span>
            </label> */}
          </div>
          <div className="input-wrapper">
            <label htmlFor="gender">Interested in:</label>
            <input
              onChange={handleChange}
              type="text"
              name="orientation"
              value={formValues.orientation}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="confirmPassword"
              value={formValues.confirmPassword}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              value={formValues.password}
              required
            />
          </div>
          <button
            disabled={
              !formValues.email ||
              (!formValues.password &&
                formValues.confirmPassword === formValues.password)
            }
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  ):('')
}

export default ProfileEditForm
