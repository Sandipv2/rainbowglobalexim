import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

function ProductDetailComp({img1, img2, img3, productName, ProductDetails}) {
    return (
        <div className="min-h-screen flex items-center flex-col md:flex-row overflow-hidden">
            <div className="md:w-1/2 w-3/4 flex justify-center items-center p-6 ">
                <div className="w-full max-w-md rounded-2xl overflow-hidden">
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
                        className="rounded-xl"
                    >
                        <SwiperSlide>
                            <img src={img1} alt="Mango 1" className="w-full h-90 md:h-full object-cover" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={img2} alt="Mango 2" className="w-full h-90 md:h-full object-cover" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={img3} alt="Mango 3" className="w-full h-90 md:h-full object-cover" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>

            <div className="md:w-1/2 w-full p-8 flex flex-col justify-center ">
                <h1 className='text-3xl text-center font-bold'>{productName}</h1>
                <ProductDetails />
            </div>
        </div>
    );
}

export default ProductDetailComp;
