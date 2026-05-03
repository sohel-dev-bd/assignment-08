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
                    <Image src={'/tiles_cover_01.png'} alt='Slider 01' width={1920} height={600} className="w-full h-50 md:h-85 lg:h-105 rounded-2xl object-cover" />
                </SwiperSlide>

                <SwiperSlide>
                    <Image src={'/tiles_cover_02.png'} alt='Slider 02' width={1920} height={600} className="w-full h-50 md:h-85 lg:h-105 rounded-2xl object-cover" />
                </SwiperSlide>

                <SwiperSlide>
                    <Image src={'/tiles_cover_03.png'} alt='Slider 03' width={1920} height={600} className="w-full h-50 md:h-85 lg:h-105 rounded-2xl object-cover" />
                </SwiperSlide>
            </Swiper>

            <div className='absolute inset-0 flex flex-col items-center justify-center z-10'>
                <div className='flex flex-col justify-center items-center space-y-3'>
                    <div className='bg-teal-700/90 px-5 py-1  rounded-full flex justify-center items-center'>
                        <h1 className='text-xl md:text-2xl lg:text-4xl font-bold text-white'>Discover Your Perfect Aesthetic</h1>
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