import React, { useState } from 'react'
import { auth } from "../config/firebase"
import { createUserWithEmailAndPassword } from 'firebase/auth'

function SignUpForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
   
  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
    } catch (error) {
      console.log(error)
    }
    window.location = "home"
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
        <button onClick={signIn}>Sign Up</button>
      </div>
    </div>
  )
}

export default SignUpForm