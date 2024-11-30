import React from 'react'
import ProductSeller from './ProductSeller'

import Separate from "../assets/separate.png"


const BestSeller = () => {
  return (
    <div className='flexCenter flex-col relative '>
        <div className='flex flex-col items-center '>
            <div class="text-[#38351f] regular-24 tracking-wider capitalize my-3">Best for You</div>
            <h2 className='text-[#27272f] bold-52 leading-snug'>Our Beverage</h2>
            <img className='my-3' src={Separate} alt="" />
        </div>
        <img className=' absolute h-full left-0' src="https://preview.designtone.xyz/html/foodily/images/background/pattern-5.png" alt="" />
        <div className='max_padd_container flex '>
            <ProductSeller img="https://preview.designtone.xyz/html/foodily/images/resource/news-1.jpg"
                            title="Broad bean and goats’ cheese bruschetta"
                            top={1}
                            quantity={50}
            /> 
            <ProductSeller img="https://preview.designtone.xyz/html/foodily/images/resource/news-2.jpg"
                            title="Broad bean and goats’ cheese bruschetta"
                            top={2}
                            quantity={50}
            />   
            <ProductSeller img="https://preview.designtone.xyz/html/foodily/images/resource/news-3.jpg"
                            title="Broad bean and goats’ cheese bruschetta"
                            top={3}
                            quantity={50}
            /> 
            
            
        </div>
    </div>
  )
}

export default BestSeller