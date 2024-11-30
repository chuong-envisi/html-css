import React from 'react'
import Juice from '../assets/juice.png'
import Separate from "../assets/separate.png"
import Btn from './Btn'
import BgInner from '../assets/1.png'
import IconInner from '../assets/juice-glass.png'

const Inner = () => {
  return (
    <div  className=' relative bg-contain py-10' >
        <div className=' absolute w-full h-[120%] bottom-0' style = {{backgroundImage: `url(${BgInner})`}}></div>

        <div className="px-14 py-10 relative flex flex-col text-left "  >
            <div className=' absolute bg-cover w-1/5 h-5/6 top-0 bottom-0 right-0' style = {{backgroundImage: `url(${IconInner})`}}></div>

            <div className='flexCenter '>
                <div className=' flex-shrink-0 flex-grow-0 basis-[58%]'>   
                    <img src={Juice} alt="" />
                </div>
                <div className=' pr-28 '>
                    <div class=" text-[#beb996] regular-24 tracking-wider capitalize my-3">Drink for Health</div>
                    <h2 className='text-[#27272f] bold-52 leading-snug' >Fresh Fruit <span class="text-[#de9190] bold-52 leading-snug my-3">Juices</span></h2>
                    <img className='my-3' src={Separate} alt="" />
                    <div class="my-3 text-[#5e5e5e] regular-16">Us percipit urbanitas referrentur ea. Mei at numquam molestiae intellegam. Ansed dictas accumsan. Nam sint atqui voluptatibus an, pro ne malis semper perpetua. Nam sint atqui voluptatibus an, pro ne malis semper perpetua.</div>
                    <Btn contents='Buy Now' />
                </div>                          
            </div>
        </div>
    </div>
  )
}

export default Inner