import React from 'react'
import logo from '../assets/logo.svg'
import profilerImg from '../assets/profile.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='max_padd_container flexBetween bg-white py-2 ring-1 ring-slate-900/5 relative'>
      <Link to='/admin'><img src={logo} alt="" /></Link>
      <div className='uppercase bold-22 text-white bg-secondary px-3 rounded-md tracking-widest line-clamp-1 max-xs:bold-18 max-xs:py-2 max-xs:px-1'>Admin Panel</div>  
      <div><img src={profilerImg} alt="" className='h-12 w-12 rounded-full' /></div>
    </nav>
  )
}

export default Navbar