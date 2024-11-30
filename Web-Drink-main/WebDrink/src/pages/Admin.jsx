import React from 'react'
import Sidebar from '../components/Sidebar'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar1 from '../components/Navbar1';

const Admin = () => {
  return (
    <div className=''>
      <Navbar1 />
      <div className='lg:flex max_padd_container flexCenter'>
        <Sidebar />
      </div>
    </div> 
  )
}

export default Admin