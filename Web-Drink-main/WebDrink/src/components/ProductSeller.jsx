import React from 'react'
import { MdPhotoLibrary } from "react-icons/md";


const ProductSeller = ({img, title, top, quantity}) => {
  return (
    <div className='group px-5 py-10'>
        
        <div className='group-hover:shadow-2xl transition-all duration-700 ease-in-out'>
            <div className='w-full h-full relative'>
                <img className='w-full' src={img} alt="" />
                <div className=' absolute flexCenter top-0 right-0 w-0 h-full bg-[#beb996] bg-opacity-80
                                 group-hover:w-full group-hover:left-0 transition-all duration-700 ease-in-out 
                '>
                    <div className='hidden bold-22 text-white absolute p-3 border border-solid border-white rounded-full hover:text-[#beb996]
                                hover:bg-white group-hover:inline-flex transition-all duration-700 ease-in-out z-10
                    '>
                        <MdPhotoLibrary />
                    </div>
                </div>
                
            </div>
            <div className='bg-[#f5f6fb] py-3'>
                <div className='my-5 px-8 py-1 bg-[#91ad41] inline-block text-white rounded-md regular-14 tracking-wider'>TOP {top}</div>
                <h3 className='text-[#27272f] bold-18 tracking-wide px-5 group-hover:text-[#91ad41]
                                transition-all duration-700 ease-in-out
                '>{title}</h3>
                <div className='flexCenter my-5 px-16 text-[#5e5e5e]'>
                    <p className='mr-auto'>May 21, 2021</p>
                    <p>{quantity} Quantity Sold</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductSeller