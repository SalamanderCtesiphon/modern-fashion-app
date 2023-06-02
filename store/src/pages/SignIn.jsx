import React from 'react'

function SignIn() {
  return (
    <div className='page'>
      <div className='card'>
        <h3>Welcome to our site!</h3>
        <a className='links' href="signinform">Sign In</a>
        <p>or</p>
        <a className='links' href="home">Continues as a guest</a>
        <p>Not a member?</p>
        <a className='links' href="signupform">Sign Up!</a>
      </div>
    </div>
  )
}

export default SignIn