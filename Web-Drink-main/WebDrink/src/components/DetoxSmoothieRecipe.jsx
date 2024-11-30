import React from 'react'
import Separate from "../assets/separate.png"

const DetoxSmoothieRecipe = () => {
  return (
    <div className=' relative mt-10'>
        <div className='flex flex-col items-center'>
            <div class="text-[#38351f] regular-24 tracking-wider capitalize my-3">Best for You</div>
            <h2 className='text-[#27272f] bold-52 leading-snug'>Our Beverage</h2>
            <img className='my-3' src={Separate} alt="" />
        </div>
        <img className=' absolute left-[5%] top-0' src="https://preview.designtone.xyz/html/foodily/images/icons/icon-1.png" alt="" />
        <img className=' absolute right-[15%] top-0' src="https://preview.designtone.xyz/html/foodily/images/icons/icon-2.png" alt="" />
        <img className=' absolute right-[5%] bottom-0' src="https://preview.designtone.xyz/html/foodily/images/icons/icon-3.png" alt="" />
        <div className='px-20 mx-10'>
            <div className=' bg-no-repeat bg-center' style = {{backgroundImage: `url(https://preview.designtone.xyz/html/foodily/images/icons/circles.png)`}}>
                <div className='flexCenter my-10'>
                    <div className='px-5 mr-5'>
                        <div className='text-right relative pr-32 mt-5 mb-20'>
                            <div className=' absolute right-0 bg-[#f67900] rounded-full w-[100px] h-[100px]'>
                                <img src="https://preview.designtone.xyz/html/foodily/images/resource/recipe-1.png" alt="" />
                            </div>
                            
                            <h5 className='text-[#27272f] bold-22 tracking-wide leading-snug pt-3'>Cucumber</h5>
                            <p className='text-[#777777] regular-12 tracking-wider px-3'>Us percipit urbanitas referrentur ea. Mei at numquam molestiae</p>       
                            
                        </div>
                        <div className='text-right relative pr-32 mt-5 mb-20 mr-20'>
                            <div className=' absolute right-0 bg-[#f67900] rounded-full w-[100px] h-[100px]'>
                                <img src="https://preview.designtone.xyz/html/foodily/images/resource/recipe-2.png" alt="" />
                            </div>
                            
                            <h5 className='text-[#27272f] bold-22 tracking-wide leading-snug pt-3'>Cucumber</h5>
                            <p className='text-[#777777] regular-12 tracking-wider px-3'>Us percipit urbanitas referrentur ea. Mei at numquam molestiae</p>       
                            
                        </div>
                    </div>
                    <div className='ml-[-24px] h-full w-[300px]'>
                        <img className='mb-32' src="https://preview.designtone.xyz/html/foodily/images/resource/recipe.png" alt="" />
                    </div>
                    <div className='px-5 ml-5'>
                        <div className='text-left relative pl-32 mt-5 mb-20'>
                            <div className=' absolute left-0 bg-[#f67900] rounded-full w-[100px] h-[100px]'>
                                <img src="https://preview.designtone.xyz/html/foodily/images/resource/recipe-3.png" alt="" />
                            </div>
                            
                            <h5 className='text-[#27272f] bold-22 tracking-wide leading-snug pt-3'>Cucumber</h5>
                            <p className='text-[#777777] regular-12 tracking-wider px-3'>Us percipit urbanitas referrentur ea. Mei at numquam molestiae</p>       
                            
                        </div>
                        <div className='text-left relative pl-32 mt-5 mb-20 ml-20'>
                            <div className=' absolute left-0 bg-[#f67900] rounded-full w-[100px] h-[100px]'>
                                <img src="https://preview.designtone.xyz/html/foodily/images/resource/recipe-4.png" alt="" />
                            </div>
                            
                            <h5 className='text-[#27272f] bold-22 tracking-wide leading-snug pt-3'>Cucumber</h5>
                            <p className='text-[#777777] regular-12 tracking-wider px-3'>Us percipit urbanitas referrentur ea. Mei at numquam molestiae</p>       
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DetoxSmoothieRecipe