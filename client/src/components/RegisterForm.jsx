import React from 'react'
import { RegisterUser } from '../services/Auth'
import { useState, useEffect } from 'react'
import EditGender from './EditGender'
import EditOrientation from './EditOrientation'
import { LikeUser, GetUsers } from '../services/UserServices'

const RegisterForm = ({ register, setRegister, users, setUsers }) => {
  ///// FOR PASSWORD STRENGTH CHECK
  const lowercase = new RegExp('^(?=.*[a-z])')
  const uppercase = new RegExp('^(?=.*[A-Z])')
  const numeric = new RegExp('^(?=.*[0-9])')
  const special = new RegExp('^(?=.*[!@#$%^&*])')
  const passSize = new RegExp('^(?=.{8,})')
  const strongRegex = new RegExp(
    '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
  )
  let [lower, setLower] = useState({ line: '', class: 'none' })
  let [upper, setUpper] = useState({ line: '', class: 'none' })
  let [num, setNum] = useState({ line: '', class: 'none' })
  let [spec, setSpec] = useState({ line: '', class: 'none' })
  let [size, setSize] = useState({ line: '', class: 'none' })

  //// FORM VALUES
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: 'Male',
    orientation: 'Male',
    pfp_link:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLOpe1MAvkqPwwTU0KLsa6FMh1rAZWg3OR_Q&usqp=CAU',
    bio: 'Just here to have fun!'
  })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }
  const currentUser = {
    gender: 'Male',
    orientation: 'Male'
  }
  useEffect(() => {
    GetUsers().then((res) => setUsers(res))
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (
      strongRegex.test(formValues.password) &&
      formValues.password === formValues.confirmPassword
    ) {
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
      let u = await GetUsers()
      console.log(u + 'reg')
      await setUsers(u)
      for (let i = 0; i < u.length; i++) {
        if (u[i].passwordDigest === 'test') {
          await LikeUser(parseInt(users[i].id), parseInt(u[u.length - 1].id))
        }
      }
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
  }

  const toLogin = () => {
    setRegister(false)
  }

  return (
    <div className="card-overlay">
      <div className="reg-title">
        <h3>Create an account:</h3>
      </div>
      <form className="col" onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <input
            onChange={handleChange}
            name="firstName"
            type="text"
            placeholder="First Name"
            value={formValues.firstName}
            required
            className="input-box-mid"
          />
        </div>
        <div className="input-wrapper">
          <input
            onChange={handleChange}
            name="lastName"
            type="text"
            placeholder="Last Name"
            value={formValues.lastName}
            required
            className="input-box-mid"
          />
        </div>
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
        <div className="reg-form-gender">
          <EditGender
            currentUser={currentUser}
            formValues={formValues}
            setFormValues={setFormValues}
          />
        </div>
        <div className="reg-form-gender">
          <EditOrientation
            currentUser={currentUser}
            formValues={formValues}
            setFormValues={setFormValues}
          />
        </div>
        <div className="input-wrapper">
          <input
            onChange={handleChange}
            type="password"
            name="password"
            value={formValues.password}
            placeholder="Password"
            required
            className="input-box-mid"
          />
        </div>
        <div className="input-wrapper">
          <input
            onChange={handleChange}
            type="password"
            name="confirmPassword"
            value={formValues.confirmPassword}
            required
            className="input-box-mid"
            placeholder="Confirm Password"
          />
        </div>
        <div className="already-member">
          <div>
            <p>Already a member?</p>
          </div>
          <div>
            <p>
              <span id="already-member" onClick={() => toLogin()}>
                Login Here
              </span>
            </p>
          </div>
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
