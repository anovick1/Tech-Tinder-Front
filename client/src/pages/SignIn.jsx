import React, { useState } from 'react'
import RegisterForm from '../components/RegisterForm'
import SignInForm from '../components/SignInForm'

const SignIn = ({ setCurrentUser, users, count, setCount, setUsers }) => {
  const [register, setRegister] = useState(true)
  const checkForm = () => {
    if (register === true) {
      return (
        <RegisterForm
          register={register}
          setRegister={setRegister}
          users={users}
          count={count}
          setCount={setCount}
          setUsers={setUsers}
        />
      )
    } else {
      return (
        <SignInForm
          setCurrentUser={setCurrentUser}
          register={register}
          setRegister={setRegister}
        />
      )
    }
  }
  return (
    <div className="feed" id="feed-login">
      <div className="login-page">
        <div className="intro-words">
          <h1>Tech-Tinder</h1>
          <img
            className="signin-logo"
            src="https://cdn-icons-png.flaticon.com/512/3771/3771451.png"
          />
        </div>
        {checkForm()}
      </div>
    </div>
  )
}

export default SignIn
