import React from 'react'
import '../../components/portfolio/portfolio.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import sidebar from '../../img/sidebar.png'
import Ecommerce from '../../img/ecommerce.png'
import hoc from '../../img/hoc.png'
import musicApp from '../../img/musicapp.png'
import 'swiper/css'

const Portfolio = () => {
  return (
   <div className='portfolio'>
    <span>Recent Projects</span>
    <span>Portfolio</span>

    <Swiper
     spaceBetween={30}
     slidesPerView={3}
     grabCursor={true}
     className='portfolio-slider'
    >
        <SwiperSlide>
            <img src={sidebar} alt=''/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={Ecommerce} alt=''/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={musicApp} alt=''/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={hoc} alt=''/>
        </SwiperSlide>
    </Swiper>
   </div>
  )
}

export default Portfolio