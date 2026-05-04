import React from 'react';
import Marquee from "react-fast-marquee";

const marqueeText = [
    "👉 “100% Verified Listings | Secure Contact | Nationwide Delivery Available”👉 “100% Verified Listings | Secure Contact | Nationwide Delivery Available” "
];


const NewsMarquee = () => {
    return (
        <div className='w-[90%] md:w-[90%] lg:w-[90%]  mx-auto bg-accent/80 rounded-l-lg rounded-r-lg text-white flex justify-between items-center gap-1'>
            <p className='bg-red-500 px-2 text-bold rounded-l-lg'>Update: </p>
            <Marquee
                pauseOnHover={true}
                speed={50}
            >
               {marqueeText.map((text, index) => (
                    <span key={index} className='bg-green-400 rounded-full mx-4 text-black bg'>
                        {text} 
                    </span>
                ))}
            </Marquee>
            
        </div>
        
        
    );
};

export default NewsMarquee;