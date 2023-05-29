import React, { useState } from 'react'
import { auth } from "../config/firebase"
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'

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

  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user)
    }
  })

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
        <button onClick={() => signIn()}><a href="home">Sign In</a></button>
      </div>
    </div>
  )
}

export default SignInForm