import React from 'react'
import { IoIosSend } from "react-icons/io";

const DealsOfWeek = () => {
  return (
    <div className=' relative'>
        <div className=' h-[164px] absolute top-0 w-full' style = {{backgroundImage: `url(https://preview.designtone.xyz/html/foodily/images/background/pattern-1.png)`}}></div>
        
        <div className=' py-32 bg-no-repeat bg-cover bg-fixed' style = {{backgroundImage: `url(https://preview.designtone.xyz/html/foodily/images/background/2.jpg)`}}>
            
              <div className='w-[670px] h-[670px] rounded-full z-10 mx-44'  style={{backgroundColor: 'rgba(190, 185, 150, 0.95)'}}>
                <div className='w-full h-full bg-no-repeat bg-center' style = {{backgroundImage: `url(https://preview.designtone.xyz/html/foodily/images/resource/deal.png)`}}>
                  <div className='w-full h-full flex flex-col justify-center items-center ' >
                    <div className='mb-5'>
                        <div class="font-mono text-white regular-24 tracking-wide capitalize mb-2">30% Off For juice</div>
                        <h2 className='font-mono text-white tracking-tight bold-48 leading-snug mb-2'>Big Deals of the Week</h2>
                        <div class="text-white tracking-wider ">Us percipit urbanitas referrentur ea. Mei at numquam molestiae <br/> intellegam. Ansed dictas accumsan. </div>
                    </div>
                    <div class="">
                      <div class="text-white font-bold tracking-wider mb-[30px]">To Get New Of Our Deals</div>
                      <form method="post" action="contact.html">
                        <div class="relative mb-6">
                          <input type="text" id="input-group-1" class=" border border-gray-300 text-sm rounded-5xl
                           focus:ring-red-500 focus:border-red-500 block w-full ps-10 py-5 px-24 dark:border-gray-100
                            dark:placeholder-gray-100 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500 
                            outline-none transition-all duration-500 ease-in-out" placeholder="type your email" style={{backgroundColor: 'rgba(190, 185, 150, 0.95)'}}/>
                          <div class="absolute inset-y-0 end-0 flex items-center ps-3.5 pointer-events-none px-5 text-white">
                            <IoIosSend />
                          </div>
                        </div>
                      </form>
                    </div>  
                  </div>
                </div>
            
             </div>
        </div>
        <div className='h-[164px] absolute bottom-0 w-full' style = {{backgroundImage: `url(https://preview.designtone.xyz/html/foodily/images/background/pattern-2.png)`}}></div>
    </div>
  )
}

export default DealsOfWeek