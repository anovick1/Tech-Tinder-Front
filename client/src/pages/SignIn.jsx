import React, { useState } from 'react'
import RegisterForm from '../components/RegisterForm'
import SignInForm from '../components/SignInForm'

const SignIn = ({ setCurrentUser }) => {
  const [register, setRegister] = useState(true)
  const checkForm = () => {
    if (register === true) {
      return <RegisterForm register={register} setRegister={setRegister} />
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
          <h3>The place to meet fellow nerds and maybe find your soulmate</h3>
        </div>
        {checkForm()}
      </div>
    </div>
  )
}

export default SignIn
