import React from 'react'
import { useNavigate } from 'react-router-dom'
import { RegisterUser } from '../services/Auth'
import { useState } from 'react'

const RegisterForm = ({ register, setRegister }) => {
  let navigate = useNavigate()
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
    orientation: '',
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
    setRegister(false)
  }

  return (
    <div className="card-overlay">
      <h3>Create an account:</h3>
      <form className="col" onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <div>
            <label>First Name:</label>
          </div>
          <div>
            <input
              onChange={handleChange}
              name="firstName"
              type="text"
              placeholder="John"
              value={formValues.firstName}
              required
            />
          </div>
        </div>
        <div className="input-wrapper">
          <label>Last Name:</label>
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
          <label htmlFor="password">Password</label>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            value={formValues.password}
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
        <div className="signup-btn">
          <button
            disabled={
              !formValues.email ||
              (!formValues.password &&
                formValues.confirmPassword === formValues.password)
            }
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  )
}

export default RegisterForm
