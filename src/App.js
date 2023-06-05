import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import Cart from './components/pages/Cart';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ShopContextProvider } from './context/Home-Context';

function App() {
  return (
    <ShopContextProvider>
      <div className="app">
        <Router>
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path='/signup' element={<Signup />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </div>
    </ShopContextProvider>
  );
}


export default App;
