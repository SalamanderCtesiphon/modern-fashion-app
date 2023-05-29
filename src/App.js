import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route index element={<SignIn />} />
          <Route path='signinform' element={<SignInForm />} />
          <Route path='home' element={<Home />} />
          <Route path='success' element={<Success />} />
          <Route path='cancel' element={<Cancel />} />
          <Route path='shirts' element={<Shirts />} />
          <Route path='pants' element={<Pants />} />
          <Route path='shoes' element={<Shoes />} />
          <Route path='checkout' element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
