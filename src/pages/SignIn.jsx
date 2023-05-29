import React from 'react'
import { signOut, getAuth } from 'firebase/auth'

function SignIn() {

  function signOutUser() {
    // Sign out of Firebase.
    signOut(getAuth())
  }


  return (
    <div className='page'>
      <div className='card'>
        <h3>Welcome to our site!</h3>
        <a href="signinform">Sign In</a>
        <p>or</p>
        <a href="home">Continues as a guest</a>
        <p>Not a member?</p>
        <a href="signupform">Sign Up!</a>
        <button onClick={() => signOutUser()} >Logout</button>
      </div>
    </div>
  )
}

export default SignIn