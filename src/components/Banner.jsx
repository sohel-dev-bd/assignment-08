"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import { Button } from '@heroui/react';
import Link from 'next/link';


const Banner = () => {
    return (
        <div className='my-10 relative'>
            <Swiper className='w-[90%] md:w-[90%] lg:w-[90%]  mx-auto'
                modules={[Navigation, Autoplay]}
                navigation={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
                loop={true}
            >
                <SwiperSlide>
                    <Image src={'/cow-banner-01-.jpg'} alt='Slider 01' width={1920} height={600} className="w-full h-50 md:h-85 lg:h-105 rounded-2xl object-cover" />
                </SwiperSlide>

                <SwiperSlide>
                    <Image src={'/cow-banner-02-.jpg'} alt='Slider 02' width={1920} height={600} className="w-full h-50 md:h-85 lg:h-105 rounded-2xl object-cover" />
                </SwiperSlide>

                <SwiperSlide>
                    <Image src={'/cow-banner-03-.jpg'} alt='Slider 03' width={1920} height={600} className="w-full h-50 md:h-85 lg:h-105 rounded-2xl object-cover" />
                </SwiperSlide>
            </Swiper>

            <div className='absolute inset-0 flex flex-col items-center justify-center z-10'>
                <div className='flex flex-col justify-center items-center space-y-3'>
                    <div className='border px-5 py-1  rounded-2xl flex justify-center items-center'>
                        <h1 className='text-xl md:text-xl lg:text-[18px] font-bold text-white'>“Browse healthy cows, goats, and livestock from trusted sellers. Ensure your Qurbani with confidence this Eid-ul-Adha.”</h1>
                    </div>
                    <Link href={'/all-tiles'}>
                        <Button>Browse Now</Button>
                    </Link>
                    
                </div>
            </div>

        </div>
    );
};

export default Banner;