import React from 'react'
import {BsArrowRight} from 'react-icons/bs'
import { useSwiper } from 'swiper/react'
const SwiperNextButton = () => {
    const swiper = useSwiper();
  return (
   <button className='w-[48px] h-[48px] border rounded-full border-white bg-white' onClick={()=>{
    swiper.slideNext();

   }}>
    <BsArrowRight className='ml-3'/>

   </button>
  )
}

export default SwiperNextButton