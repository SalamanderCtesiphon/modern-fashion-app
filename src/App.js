import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { auth } from './config/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Success from './pages/Success';
import Cancel from './pages/Cancel';
import Shirts from './pages/Shirts';
import Pants from './pages/Pants';
import Shoes from './pages/Shoes';
import Checkout from './pages/Checkout';
import SignIn from './pages/SignIn';
import SignInForm from './pages/SignInForm';
import SignUpForm from './pages/SignUpForm';
import { AuthProvider } from './AuthContext';

function App() {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })
  }, [])

  return (
    <div className="App">
      <Header currentUser={currentUser} />
      <BrowserRouter>
        <AuthProvider value={{currentUser}}>
          <Routes>
            <Route index path='signin' element={<SignIn />} />
            <Route path='signinform' element={<SignInForm />} />
            <Route path='signupform' element={<SignUpForm />} />
            <Route path='home' element={<Home />} />
            <Route path='success' element={<Success />} />
            <Route path='cancel' element={<Cancel />} />
            <Route path='shirts' element={<Shirts />} />
            <Route path='pants' element={<Pants />} />
            <Route path='shoes' element={<Shoes />} />
            <Route path='checkout' element={<Checkout />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
