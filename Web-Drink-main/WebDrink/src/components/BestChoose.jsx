import React from 'react'
import Separate from "../assets/separate.png"
import Product from './Product'
import {Link} from 'react-router-dom'
import Btn from './Btn'


const BestChoose = ({allproducts}) => {
  return (
    <div className=' relative'>
        <div className="w-[224px] h-[270px] absolute -z-10" style = {{backgroundImage: `url(https://preview.designtone.xyz/html/foodily/images/resource/beverage.png)`}} ></div>
        <div className='flexCenter flex-col'>
            <div className='flex flex-col items-center'>
                <div class="text-[#38351f] regular-24 tracking-wider capitalize my-3">Best for You</div>
                <h2 className='text-[#27272f] bold-52 leading-snug'>Our Beverage</h2>
                <img className='my-3' src={Separate} alt="" />
            </div>
            <div className=' flexCenter flex-wrap'>
                
                {
                    allproducts.map((product) => {
                        return <Product id={product.id} img={product.image} title={product.name} price={product.price} sold={product.sold} />
                    })
                }
            </div>
            <div className='my-10'>
                <Link to='/all-products'><Btn contents='View All Products' /> </Link>     
            </div>
        </div>
    </div>
  )
}

export default BestChoose