import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { homeSlide1, homeSlide2, homeSlide3, homeSlide4, waLogo, igLogo, phoneLogo, gmailLogo } from '../../assets/index'
// import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPhone } from '@fortawesome/free-solid-svg-icons';

function Home() {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute top-0 left-0 z-10 flex flex-col justify-center items-center h-full w-full pointer-events-none gap-3">
        <div className='flex flex-col justify-center items-center gap-3'>
          <h1 className="text-7xl md:text-7xl text-white font-bold md:text-center pointer-events-auto text-left px-7">
            RAINBOW GLOBAL EXIM.
          </h1>
          <p className='text-xl md:text-2xl font-bold text-white pointer-events-auto bg-green-600 px-4'>Delivering Indian Freshness Worldwide</p>
        </div>
        <div className='flex gap-5 text-stone-200'>
          <a href="https://www.instagram.com/rainbowglobalexim/" className='pointer-events-auto hover:text-slate-800 hover:bg-white hover:rounded-full p-2 duration-300 ease-linear' target='_blank'>
            {/* <FontAwesomeIcon icon={faInstagram} size='xl' /> */}
            <img src={igLogo} alt="Instagram" width={30} />
          </a>
          <a href="https://wa.me/9325746337" className='pointer-events-auto hover:text-slate-800 hover:bg-white hover:rounded-full p-2 duration-300 ease-linear' target='_blank'>
            {/* <FontAwesomeIcon icon={faPhone} size='xl'/> */}
            <img src={waLogo} alt="WhatsApp" width={30} />
          </a>
          <a href="tel:+919272130703" className='pointer-events-auto hover:text-slate-800 hover:bg-white hover:rounded-full p-2 duration-300 ease-linear'>
            {/* <FontAwesomeIcon icon={faWhatsapp} size='xl'/> */}
            <img src={phoneLogo} alt="Phone" width={30} />
          </a>
          <a href="mailto:rainbowglobalexim@gmail.com" className='pointer-events-auto hover:text-slate-800 hover:bg-white hover:rounded-full p-2 duration-300 ease-linear'>
            {/* <FontAwesomeIcon icon={faWhatsapp} size='xl'/> */}
            <img src={gmailLogo} alt="Phone" width={30} />
          </a>
        </div>
      </div>

      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={0}
        slidesPerView={1}
        grabCursor={true}
        speed={1000}
      >
        <SwiperSlide>
          <img src={homeSlide1} alt="Slide 1" className="w-full h-screen object-cover " />
          <div className='absolute h-full pointer-events-none w-full top-0 z-11 homeSliderCover'></div>
        </SwiperSlide>

        <SwiperSlide>
          <img src={homeSlide2} alt="Slide 1" className="w-full h-screen object-cover " />
          <div className='absolute h-full pointer-events-none top-0 w-full z-9 homeSliderCover'></div>
        </SwiperSlide>

        <SwiperSlide>
          <img src={homeSlide3} alt="Slide 1" className="w-full h-screen object-cover " />
          <div className='absolute h-full pointer-events-none top-0 w-full z-9 homeSliderCover'></div>
        </SwiperSlide>

        <SwiperSlide>
          <img src={homeSlide4} alt="Slide 1" className="w-full h-screen object-cover " />
          <div className='absolute h-full pointer-events-none top-0 w-full z-9 homeSliderCover'></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Home;
