import React from 'react'
import BtnIcon1 from '../assets/btn-icon-1.png'
const Btn = ({contents}) => {
  return (
  <div className='my-3 inline-flex items-center justify-center rounded-5xl pl-2 pr-5 py-2 text-black border-[#de9190] border-[1px] border-solid group hover:bg-[#de9190] transition-all duration-400 ease-in-out'>
    <div className=' rounded-full bg-[#de9190] group-hover:bg-black flexCenter mx-2 transition-all duration-400 ease-in-out'>
        <img className='' src={BtnIcon1} alt="" />
    </div>
    <p className='px-3 tracking-wider group-hover:text-white transition-all duration-400 ease-in-out'>{contents}</p>
  </div> 
  )
}

export default Btn