import React, { useState } from 'react'
import { auth } from "../config/firebase"
import { signInWithEmailAndPassword, signOut } from 'firebase/auth'

function SignInForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
   
  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user
        })
    } catch (error) {
      const errorCode = error.code
      const errorMessage = error.message
    }
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
        <button onClick={() => signIn()}><a>Sign In</a></button>
        <button onClick={() => logout()}>Logout</button>
      </div>
    </div>
  )
}

export default SignInForm