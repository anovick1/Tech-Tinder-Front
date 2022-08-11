import React from 'react'
import RegisterForm from '../components/RegisterForm'
import SignInForm from '../components/SignInForm'

const SignIn = ({ setCurrentUser }) => {
  return (
    <div>
      <RegisterForm />
      <SignInForm setCurrentUser={setCurrentUser} />
    </div>
  )
}

export default SignIn
