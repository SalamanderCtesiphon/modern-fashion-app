import React, { useState } from 'react'
import { auth } from "../config/firebase"
import { createUserWithEmailAndPassword } from 'firebase/auth'

function SignInForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
   
  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      console.log('success')
    } catch (err) {
      console.log(err)
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
        <button onClick={signIn}>Sign In</button>
      </div>
    </div>
  )
}

export default SignInForm