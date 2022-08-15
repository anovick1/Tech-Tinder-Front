import React from 'react'
import { SignInUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const SignInForm = ({ setCurrentUser, currentUser }) => {
  let navigate = useNavigate()
  const [formValues, setFormValues] = useState({ email: '', password: '' })
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(formValues)
    setFormValues({ email: '', password: '' })
    setCurrentUser(payload)
    navigate('/home')
  }

  return (
    <div className="card-overlay">
      <h3>Sign-In</h3>
      <form className="col" onSubmit={handleSubmit}>
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
          <label htmlFor="password">Password</label>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            value={formValues.password}
            required
          />
        </div>
        <div className="signup-btn ">
          <button disabled={!formValues.email || !formValues.password}>
            Sign In
          </button>
        </div>
      </form>
    </div>
  )
}

export default SignInForm
