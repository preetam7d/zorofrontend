import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Context from './components/Context';
import Singleproduct from './pages/Singleproduct';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import Makeorder from './pages/Makeorder';
import Makeshiping from './pages/Makeshiping';
import Makepayment from './pages/Makepayment';
import Placeorder from './pages/Placeorder';
import Order from './pages/Order';
import Orders from './pages/Orders';
import Admin from './pages/Admin';
import Footer from './components/Footer';
import Adminlogin from './pages/Adminlogin';

function App() {
  return (
    <Context className="App">
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/product/:id' element={<Singleproduct />} />
        <Route exact path='/cart' element={<Cart />} />
        <Route exact path='/profile' element={<Profile />} />
        <Route exact path='/makeorder' element={<Makeorder />} />
        <Route exact path='/makeshiping' element={<Makeshiping />} />
        <Route exact path='/makepayment' element={<Makepayment />} />
        <Route exact path='/placeorder' element={<Placeorder />} />
        <Route exact path='/order' element={<Order />} />
        <Route exact path='/orders' element={<Orders />} />
        <Route exact path='/admin' element={<Admin />} />
        <Route exact path='/adminlogin' element={<Adminlogin />} />
      </Routes>
      <Footer />
    </Context>
  );
}

export default App;
