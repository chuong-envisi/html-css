import React from 'react'
import { Navigation, Autoplay, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

import { FaPlus } from "react-icons/fa";

const ImgLink = [
    'https://preview.designtone.xyz/html/foodily/images/gallery/1.jpg',
    'https://preview.designtone.xyz/html/foodily/images/gallery/2.jpg',
    'https://preview.designtone.xyz/html/foodily/images/gallery/3.jpg',
    'https://preview.designtone.xyz/html/foodily/images/gallery/4.jpg',
    'https://preview.designtone.xyz/html/foodily/images/gallery/5.jpg',
    'https://preview.designtone.xyz/html/foodily/images/gallery/3.jpg',
]

const SliderProduct = () => {
    return (
        <Swiper
            modules={[Navigation, Autoplay, A11y]}
            spaceBetween={0}
            slidesPerView={5}
            
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            loop = {true}
            autoplay = {{
                delay: 30000,
                disableOnInteraction: false
            }}
            className='w-full h-full !-z-0'
        
        >
          {
            ImgLink.map((img) => {
                return(
                    <SwiperSlide className=''>
                        <div className='group w-full h-full relative '>
                            <img className='w-[300px] h-full' src={img} alt="" />
                            <div className=' absolute flexCenter m-auto top-0 left-0 bottom-0 right-0 w-0 h-[90%] bg-[#beb996] bg-opacity-80
                                            group-hover:w-[90%] transition-all duration-700 ease-in-out 
                            '>
                                <div className='hidden bold-22 text-white absolute p-3 border border-solid border-white rounded-full hover:text-[#beb996]
                                            hover:bg-white group-hover:inline-flex transition-all duration-700 ease-in-out 
                                '>
                                    <FaPlus />
                                </div>
                            </div>
                            
                        </div>
                    </SwiperSlide>
                )
            })
          }
        </Swiper>
      );
  }

export default SliderProduct