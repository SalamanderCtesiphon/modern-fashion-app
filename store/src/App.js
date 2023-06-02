import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { auth } from './config/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Success from './pages/Success';
import Cancel from './pages/Cancel';
import Shop from './pages/Shop';
import About from './pages/About';
import Checkout from './pages/Checkout';
import SignIn from './pages/SignIn';
import SignInForm from './pages/SignInForm';
import SignUpForm from './pages/SignUpForm';
import { AuthProvider } from './AuthContext';
import CartProvider from './pages/CartContext';
import Contact from './pages/Contact';

function App() {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })
  }, [])

  return (
    <div className="App">
      <CartProvider>
        <Header currentUser={currentUser} />
        <BrowserRouter>
          <AuthProvider value={{currentUser}}>
            <Routes>
              <Route index path='/' element={<SignIn />} />
              <Route path='signinform' element={<SignInForm />} />
              <Route path='signupform' element={<SignUpForm />} />
              <Route path='home' element={<Home />} />
              <Route path='success' element={<Success />} />
              <Route path='cancel' element={<Cancel />} />
              <Route path='shop' element={<Shop />} />
              <Route path='about' element={<About />} />
              <Route path='contact' element={<Contact />} />
              <Route path='checkout' element={<Checkout />} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
