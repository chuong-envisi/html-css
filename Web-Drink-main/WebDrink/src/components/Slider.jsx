import React from 'react'
import { Navigation, Autoplay, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';


import ContentImg1 from '../assets/hero-slider/content-image-1.png'
import ContentImg2 from '../assets/hero-slider/content-image-2.png'
import ContentImg3 from '../assets/hero-slider/content-image-3.png'
import Icon1 from '../assets/hero-slider/icon-1.png'
import Icon2 from '../assets/hero-slider/icon-2.png'
import Icon3 from '../assets/hero-slider/icon-3.png'

import Icon6 from '../assets/hero-slider/icon-6.png'
import Icon7 from '../assets/hero-slider/icon-7.png'
import Pattern1 from '../assets/hero-slider/pattern-1.png'
import BtnIcon from '../assets/hero-slider/btn-icon.png'

import Navbar from './Navbar'

const data = [
  {
      content_img: ContentImg1,
      icon_1: Icon2,
      bg: "bg-[#beb996]"
  },
  {
    content_img: ContentImg3,
    icon_1: Icon7,
    bg: "bg-[#a79bac]"
  },
  {
      content_img: ContentImg2,
      icon_1: Icon6,
      bg: "bg-[#beb996]"
  },
  
]

const Slider = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Pagination, A11y, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      
      pagination={{ clickable: true }}
      
      loop = {true}
      autoplay = {{
        delay: 30000,
        disableOnInteraction: false
      }}
      className=' relative transition-all duration-200'
      
    >
      <Navbar />
      
        {
          data.map((x) => {
            return (
              <SwiperSlide className={x.bg}>
                <div className='slide relative flexCenter text-[112px] font-[400] p-20'>
                  <div className='z-10 flexStart flex-col mx-14'>
                    <div className='flex items-start flex-col text-white slide_content px-12 pt-16 opacity-0 -translate-y-20'>
                      <h1 class=" text-left your-style leading-tight">Heathly</h1>
                      <h1 class=" text-left second-letter your-style leading-none">Smoothie</h1>
                      <p class=" leading-8 text-left">
                        Consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                      </p>
                      <div className=' inline-flex items-center justify-center rounded-5xl px-2 py-2 pr-5 text-white bg-[#de9190] hover:bg-[#91ad41] transition-all duration-400 ease-in-out'>
                        <div className=' rounded-full bg-white flexCenter mx-2'>
                          <img className='' src={BtnIcon} alt="" />
                        </div>
                        <p className='px-3 tracking-wider'>Buy Now</p>
                      </div>
                    </div>
                    
                  </div>
                  <div className='px-10'>
                    <img className=' w-full' src={x.content_img} alt="" />
                    <img className=' absolute opacity-0 bottom-10 -left-16 icon_1' src={x.icon_1} alt="" />
                    <img className=' absolute opacity-0 right-1/3 top-24 z-10 transform translate-x-10 icon_2' src={Icon3} alt="" />
                    <img className=' absolute opacity-0 -right-5 -top-5 icon_3' src={Icon1} alt="" />
                  </div>
                </div>
              </SwiperSlide>
            )
          })
        }
      
      <img src={Pattern1} alt="" className=' absolute z-10 bottom-0'/>
    </Swiper>
  )
}

export default Slider