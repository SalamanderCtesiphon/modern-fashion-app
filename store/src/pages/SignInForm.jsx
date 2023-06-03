import React, { useState } from 'react'
import { auth } from "../config/firebase"
import { signInWithEmailAndPassword, signOut } from 'firebase/auth'

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

  const logout = async () => {
    try {
      await signOut(auth)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="page">
      <div className="card sign-in">
        <input 
          placeholder='Email...' 
          type='email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          placeholder='Password...' 
          type='password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={() => signIn()}>Sign In</button>
      </div>
    </div>
  )
}

export default SignInForm