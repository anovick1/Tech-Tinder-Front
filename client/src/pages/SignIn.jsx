import React from 'react'
import RegisterForm from '../components/RegisterForm'
import SignInForm from '../components/SignInForm'

const SignIn = ({ setCurrentUser }) => {
  return (
    
    <div className= "login-page">
      <div className= 'intro-words'>
        <h2>Welcome to</h2>
        <h1>Tech-Tinder</h1>
        <h3>The place to meet fellow nerds and maybe find your soulmate</h3>
     </div>
     <div>
      <RegisterForm />
      </div>
      <div>
      <SignInForm setCurrentUser={setCurrentUser} />
      </div>
    </div>
  )
}

export default SignIn
