import React from 'react';
import Marquee from "react-fast-marquee";

const marqueeText = [
    "New Arrivals: Ceramic Blue Tile",
    "Weekly Feature: Modern Geometric Patterns",
    "Join the Community & Get Exclusive Offers",
    "Premium Quality Tiles at Factory Prices",
    "Free Shipping Worldwide",
    "Best Sellers of the Month"
];


const NewsMarquee = () => {
    return (
        <div className='w-[90%] md:w-[90%] lg:w-[90%]  mx-auto bg-accent/80 rounded-l-lg rounded-r-lg text-white flex justify-between items-center gap-1'>
            <p className='bg-red-500 px-2 rounded-l-lg'>Update: </p>
            <Marquee
                pauseOnHover={true}
                speed={50}
            >
               {marqueeText.map((text, index) => (
                    <span key={index} className='mx-4'>
                        {text}
                    </span>
                ))}
            </Marquee>
        </div>
    );
};

export default NewsMarquee;