import React from 'react'
import { SignInUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const SignInForm = ({ setCurrentUser, currentUser, register, setRegister }) => {
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
  const toRegister = () => {
    setRegister(true)
  }
  return (
    <div className="card-overlay">
      <h3>Sign-In</h3>
      <form className="col" onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <input
            onChange={handleChange}
            name="email"
            type="email"
            placeholder="Email"
            value={formValues.email}
            required
            className="input-box-mid"
          />
        </div>
        <div className="input-wrapper">
          <input
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="Password"
            value={formValues.password}
            required
            className="input-box-mid"
          />
        </div>
        <div className="already-member">
          <div>
            <p>New to Tech-Tinder? </p>
          </div>
          <div>
            <p>
              <span id="already-member" onClick={() => toRegister()}>
                Register Here
              </span>
            </p>
          </div>
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
