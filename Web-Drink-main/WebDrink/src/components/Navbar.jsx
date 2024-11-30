import React, { useState } from 'react'
import { FaAngleDown } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { LuShoppingCart } from "react-icons/lu";
import { NavLink, Link } from 'react-router-dom';
import Logo from '../assets/hero-slider/logo.png'
import Logo1 from '../assets/hero-slider/logo-small.png'
import Login from './Login';
const Navbar = ({bg}) => {

  const [color, setColor] = useState(false);
  const changeColor = () => {
	if(window.scrollY > 90)
		setColor(true)
	else setColor(false)
  }
  const [isPopupActive, setIsPopupActive] = useState(false); 

  window.addEventListener('scroll', changeColor)
  return (
    <div className=' relative z-20'>
		<div className={`z-20 py-7 fixed top-0 left-0 right-0 text-white ${color?`bg-white !py-1 border-b border-[#27272f] 
			border-solid border-opacity-15 !text-[#27272f]`:``} transition-all duration-400 ease-in-out`}>
			<div className='max_padd_container flexCenter'>
				<div className='mr-auto'>
					<Link to='/'><img src={color?Logo1:Logo} alt="" /></Link>
				</div>
				<div className='flex items-center space-x-6 text-[20px]'>
						<Link className="p-2 rounded-full hover:bg-gray-100" onClick={() => setIsPopupActive(!isPopupActive)}>
							<FaRegUser className='white'  />
						</Link>
						<Link to='/cart' className="p-2 rounded-full hover:bg-gray-100">
							<LuShoppingCart />
						</Link>
				</div>	
			</div>
		</div>
		<div className={`${isPopupActive?` inline-block`:`hidden`} transition-all ease-in-out duration-500`}>
		 	<Login isPopupActive={isPopupActive} />
		</div>
		
	</div>
  )
}

export default Navbar