import React, { useContext, useState } from 'react'
import { LuShoppingCart } from "react-icons/lu";
import { ShopContext } from '../context/ShopContext';


const Product = (props) => {
  const {id, img, title, price, sold} = props;
  const { changeActive, addToCart } = useContext(ShopContext)
  return (
    <div className='group text-[#27272f] mx-5 my-5 relative'>
      <div className=' rounded-lg overflow-hidden bg-[#beb996]' onClick={() => changeActive(id, title,img, price)}>
        <img className='group-hover:scale-105 group-hover:opacity-50 group-hover:rotate-1 transition-all duration-700 ease-in-out' src={img} alt="" />
      </div>
      <div className=''>
        <div className=' flex px-3 group-hover:text-[#de9190] transition-all duration-700 ease-in-out ' >
          <h2 className='regular-20 tracking-wider capitalize my-3 mr-auto'><a className='no-underline  ' href="/">{title}</a></h2>
          <LuShoppingCart onClick={() => addToCart(id)}  className='regular-20 tracking-wider capitalize my-auto ' />
        </div>
        <div className=' flex text-[#777777] regular-16 tracking-wider px-3'>
          <p className='mr-auto'>{sold} sold</p> 
          <p>{price}$</p> 
        </div>
      </div>
    </div>
  )
}

export default Product