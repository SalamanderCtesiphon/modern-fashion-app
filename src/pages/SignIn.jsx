import React, { useState } from 'react'
import { auth } from "../config/firebase"
import { createUserWithEmailAndPassword, signOut } from 'firebase/auth'

function SignIn() {
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

  const logout = async () => {
    try {
      await signOut(auth)
      console.log('signed out')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='page'>
      <div className='card'>
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

        <button onClick={logout} >Logout</button>
      </div>
    </div>
  )
}

export default SignIn