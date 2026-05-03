"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button, Spinner } from '@heroui/react';
import { useParams } from 'next/navigation';

const SingleTilePage = () => {
    const { id } = useParams();
    const [tile, setTile] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => {
                const findTile = data.find(t => t.id === id);
                setTile(findTile);
                setLoading(false);
            }).catch(error => {
                console.error('Error:', error);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return (
            <div className="flex flex-col items-center gap-2 max-w-md mx-auto p-8 text-center">
                <Spinner size="xl" />
                <span className="text-xs text-muted">Loading... Please Wait!</span>
            </div>
        );
    }

    if (!tile) {
        return (
            <div className='container mx-auto my-20 text-center'>
                <h2 className='text-2xl font-bold text-gray-800'>Tile not found</h2>
                <Link href="/all-tiles">
                    <Button className='mt-4 bg-teal-600 text-white'>Back to All Tiles</Button>
                </Link>
            </div>
        );
    }

    return (

        <div className='container mx-auto my-10 px-4 bg-white py-6 shadow-lg rounded-2xl'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3  items-start'>

                <div className='w-auto'>
                    <Image
                        src={tile.image}
                        alt={tile.title}
                        width={500}
                        height={500}
                        className='w-auto h-auto object-cover rounded-xl border'
                    />
                </div>

                <div className='space-y-4'>
                    <h1 className='text-3xl font-bold text-teal-600'>
                        {tile.title}
                    </h1>

                    <p className='text-sm text-gray-500 uppercase tracking-wide'>
                        {tile.category} Style
                    </p>

                    <p className='text-gray-700 leading-relaxed'>
                        {tile.description}
                    </p>

                    <div className='grid grid-cols-2 gap-4 text-sm mt-3'>
                        <p><span className='font-semibold'>Material:</span> {tile.material}</p>
                        <p><span className='font-semibold'>Size:</span> {tile.dimensions}</p>
                        <p><span className='font-semibold'>Price:</span> {tile.price} {tile.currency}</p>
                        <p>
                            <span className='font-semibold'>Stock:</span>{" "}
                            <span className={tile.inStock ? "text-green-600" : "text-red-500"}>
                                {tile.inStock ? "Available" : "Out of Stock"}
                            </span>
                        </p>
                    </div>

                    <div className='flex gap-2 flex-wrap mt-2'>
                        <span className='px-3 py-1 text-xs bg-blue-100 text-blue-600 rounded-full'>Blue</span>
                        <span className='px-3 py-1 text-xs bg-gray-100 text-gray-600 rounded-full'>Ceramic</span>
                        <span className='px-3 py-1 text-xs bg-green-100 text-green-600 rounded-full'>Minimalist</span>
                    </div>

                    <div className='flex gap-4 mt-6'>
                        <Link href="/all-tiles">
                            <Button variant="bordered">Back to All Tiles</Button>
                        </Link>
                        <Button className='bg-teal-600 text-white hover:bg-teal-700'>
                            Buy Now
                        </Button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default SingleTilePage;