"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button, Spinner } from '@heroui/react';

const FeaturedTilesSection = () => {

    const [tiles, setTiles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetch('/data.json')
            .then(res => res.json())
            .then(data => {
                setTiles(data);
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
            <h2 className='text-3xl font-bold text-center mb-8 text-teal-600'>Featured Tiles</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {tiles.slice(0, 4).map((tile) => (
                    <div key={tile.id} className='bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow'>
                        <div className='relative h-64'>
                            <Image
                                src={tile.image}
                                alt={tile.title}
                                fill
                                className='object-cover'
                            />
                        </div>

                        <div className='p-4'>
                            <h3 className='text-lg font-bold text-gray-800'>{tile.title}</h3>
                            <p className='text-teal-600 font-semibold text-xl mt-2'>${tile.price}</p>

                            <Link href={`/tiles/${tile.id}`}>
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
                    See All Tiles
                </Button>
            </Link>

        </div>
    );
};

export default FeaturedTilesSection;