"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button, Spinner } from '@heroui/react';

const CowSection = () => {

    const [cows, setCows] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetch('/data.json')
            .then(res => res.json())
            .then(data => {
                setCows(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="flex flex-col items-center gap-2 max-w-md mx-auto p-8 text-center">
                <Spinner size="xl" />
                <span className="text-xs text-muted">Loading... Please Wait!</span>
            </div>
        );
    }

    return (
        <div className='container mx-auto my-10 px-4'>
            <h2 className='text-3xl font-bold text-center mb-8 text-teal-600'>Many Cows</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {cows.slice(0, 4).map((cow) => (
                    <div key={cow.id} className='bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow'>
                        <div className='relative h-64'>
                            <Image
                                src={cow.image}
                                alt={cow.name}
                                fill
                                className='object-cover'
                            />
                        </div>

                        <div className='p-4'>
                            <h3 className='text-lg font-bold text-gray-800'>{cow.name}</h3>
                            <p className='text-teal-600 font-semibold text-xl mt-2'>Tk : {cow.price}</p>

                            <Link href={`/tiles/${cow.id}`}>
                                <Button className='w-full mt-4 bg-teal-600 text-white hover:bg-teal-700'>
                                    View Details
                                </Button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            <Link href={"/all-tiles"}>
                <Button className='w-full mt-4'>
                    See All Animals
                </Button>
            </Link>

        </div>
    );
};

export default CowSection;