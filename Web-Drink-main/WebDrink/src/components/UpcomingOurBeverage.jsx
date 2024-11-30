import React from 'react'
import Separate from "../assets/separate.png"
import Btn from './Btn'


const UpcomingOurBeverage = () => {
  return (
    <div className='bg-[#f7eee2] relative flex'>
        <img className=' absolute bottom-0 left-0' src="https://preview.designtone.xyz/html/foodily/images/icons/icon-4.png" alt="" />
        <div  className='pl-40 w-1/2 flexCenter' >
            
            
            <div className="py-10 text-left"  >

                <div className='flexCenter '>
                    <div className=' pr-28'>
                        <h2 className='text-[#27272f] bold-52 leading-snug' >Upcoming Our Beverage</h2>
                        <img className='my-3' src={Separate} alt="" />
                        <div class="my-3 text-[#5e5e5e] regular-16 tracking-wider ">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                        <Btn contents='All Product' />
                    </div>                
                </div>
            </div>
        </div>
        <div className='w-1/2 h-full relative' >   
            <img src='https://preview.designtone.xyz/html/foodily/images/background/pattern-3.png'
                className=' absolute h-full w-[164px] left-0 top-0'
            />
            <img className=' h-full w-full ' src="https://preview.designtone.xyz/html/foodily/images/resource/image-1.jpg" alt="" />
        </div>
    </div>
  )
}

export default UpcomingOurBeverage