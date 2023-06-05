import React, { useState } from 'react'
import { auth } from "../config/firebase"
import { signInWithEmailAndPassword } from 'firebase/auth'

function SignInForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
   
  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
      console.log(error)
    }
    window.location = "home"
  }

  return (
    <div className="page">
      <div className="card sign-in">
        <input 
          className='form-input'
          placeholder='Email...' 
          type='email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          className='form-input'
          placeholder='Password...' 
          type='password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <a className='links' href='home' onClick={() => signIn()}>Sign In</a>
      </div>
    </div>
  )
}

export default SignInForm