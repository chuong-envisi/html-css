import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Footer from './components/Footer';
import ItemPage from './pages/ItemPage';
import Login from './components/Login';
import Admin from './pages/Admin';
import Admin1 from './pages/Admin1';
import AddProduct from './components/AddProduct';
import ListProduct from './components/ListProduct';
import { ShopContext } from './context/ShopContext';
import CartPage from './pages/CartPage';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/login' element={<Login />}></Route>
          <Route path='/admin' element={<Admin/>} ></Route>
          <Route path='/admin1' element={<Admin1/>} ></Route>
          <Route path='/addproduct' element={<AddProduct/>} ></Route>
          <Route path='/listproduct' element={<ListProduct/>} ></Route>
          <Route path='/cart' element={<CartPage/>} ></Route>
      </Routes>
      
      <Footer />
    </>
  )
}

export default App
