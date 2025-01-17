// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
// Import required modules
import { Mousewheel, Pagination, Autoplay } from 'swiper/modules';
// Images
import MacImg from '@/assets/images/ads/mac.png';
import ConsoleImg from '@/assets/images/ads/console.png';
import PixelImg from '@/assets/images/ads/pixel.png';
// Icons
import * as Icons from "@/utils/icons.util";
import { Link } from 'react-router-dom';

export const AdsSlider = () => {
    return (
        <section className='m-10 h-96 rounded-2xl overflow-hidden' aria-label="Promotional items carousel">
            <Swiper
                direction={'vertical'}
                slidesPerView={1}
                mousewheel={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2000, // Slide change interval in milliseconds
                    disableOnInteraction: true, // Keep autoplay active after user interactions
                }}
                modules={[Mousewheel, Pagination, Autoplay]}
                className="mySwiper"
            >
                {/* Swiper Slide for Google Pixel 6 Pro */}
                <SwiperSlide className='bg-secondaryBackground flex justify-between items-center p-10 overflow-hidden text-white'>
                    <div className='max-w-[400px]'>
                        <p className='bg-secondaryText w-fit p-2 text-sm rounded'>SAVE UP TO $50.00</p>
                        <h1 className='text-5xl font-semibold mt-3'>New Google Pixel 6 Pro</h1>
                        <h2 className='text-2xl my-5'>128GB, 12GB RAM, 5G, Stormy Black</h2>
                        <Link to="/shop" className='w-52 bg-primaryText flex justify-center items-center gap-3 font-bold text-white uppercase py-3 px-8 hover:bg-primaryText/75 rounded-sm'>
                            Shop now
                            <Icons.ArrowIcon aria-hidden="true" />
                        </Link>
                    </div>
                    <div className='relative'>
                        <img src={PixelImg} alt='Google Pixel 6 Pro' className='w-full h-full mt-72' />
                        <p className='absolute flex justify-center items-center text-lg -top-5 left-0 border-4 border-white bg-[#FFCEAD] rounded-full font-semibold w-28 h-28 z-50'>$1999</p>
                    </div>
                </SwiperSlide>
                {/* Swiper Slide for Macbook Pro */}
                <SwiperSlide className='bg-primaryBackground/40 flex justify-between items-center p-16 overflow-hidden'>
                    <div className='max-w-[400px]'>
                        <p className='bg-secondaryText text-white w-fit p-2 text-sm rounded'>SAVE UP TO $200.00</p>
                        <h1 className='text-5xl font-semibold text-secondaryBackground mt-3'>Macbook Pro</h1>
                        <h2 className='text-2xl text-secondaryBackground my-5'>Apple M1 Max Chip. 32GB Unified Memory, 1TB SSD Storage</h2>
                        <Link to="/shop" className='w-52 bg-primaryText flex justify-center items-center gap-3 font-bold text-white uppercase py-3 px-8 hover:bg-primaryText/75 rounded-sm'>
                            Shop now
                            <Icons.ArrowIcon aria-hidden="true" />
                        </Link>
                    </div>
                    <div className='relative'>
                        <img src={MacImg} alt='Macbook Pro' className='w-full h-full' />
                        <p className='absolute flex justify-center items-center text-lg top-0 left-0 border-4 border-white bg-primaryBackground text-white rounded-full font-semibold w-28 h-28'>$1999</p>
                    </div>
                </SwiperSlide>
                {/* Swiper Slide for Xbox 360 */}
                <SwiperSlide className='bg-[#CAD340]/50 flex justify-between items-center p-16 overflow-hidden'>
                    <div className='max-w-[400px]'>
                        <p className='bg-secondaryText text-white w-fit p-2 text-sm rounded'>SAVE UP TO $100.00</p>
                        <h1 className='text-5xl font-semibold text-secondaryBackground mt-3'>Xbox 360</h1>
                        <h2 className='text-2xl text-secondaryBackground my-5'>Xbox with the next-gen console that best fits your playstyle.</h2>
                        <Link to="/shop" className='w-52 bg-primaryText flex justify-center items-center gap-3 font-bold text-white uppercase py-3 px-8 hover:bg-primaryText/75 rounded-sm'>
                            Shop now
                            <Icons.ArrowIcon aria-hidden="true" />
                        </Link>
                    </div>
                    <div className='relative'>
                        <img src={ConsoleImg} alt='Xbox 360' className='w-full h-full' />
                        <p className='absolute flex justify-center items-center text-lg top-10 right-5 border-4 border-white bg-[#CAD340] rounded-full font-semibold w-28 h-28'>$449</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}
