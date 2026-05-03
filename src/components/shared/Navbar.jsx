"use client"
import { Button, Spinner, } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {

    const router = useRouter();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {

        const fetchSession = async () => {
            try {
                const { data: session } = await authClient.getSession();
                if (session?.user) {
                    setUser(session.user);
                }
            } catch (error) {
                console.error('Error fetching session:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchSession();

    }, []);

    const handleLogout = async () => {
        await authClient.signOut();
        setUser(null);
        router.push('/');
        setMobileMenuOpen(false);
    };

    return (
        <div className='py-3 shadow-md bg-white sticky top-0 z-[100]'>
            <div className='container mx-auto flex justify-between items-center px-4 md:px-6 lg:px-8'>

                <div className='flex gap-2 md:gap-3 items-center'>
                    <Image src={'/favicon.png'} alt="Logo" width={40} height={40} className='w-8 h-8 md:w-10 md:h-10' />
                    <h1 className='text-teal-600 text-xl md:text-2xl lg:text-3xl font-bold'>Tiles Gallery</h1>
                </div>

                <ul className='hidden md:flex gap-3 lg:gap-4'>
                    <li className='font-semibold'>
                        <NavLink href={'/'}>Home</NavLink>
                    </li>
                    <li className='font-semibold'>
                        <NavLink href={'/all-tiles'}>All Tiles</NavLink>
                    </li>
                    <li className='font-semibold'>
                        <NavLink href={'/my-profile'}>My Profile</NavLink>
                    </li>
                </ul>





                <div className='hidden md:flex gap-2 items-center'>
                    {loading ? (
                        <div className="flex items-center gap-2">
                            <Spinner size="sm" />
                            <span className="text-xs text-gray-500">Loading...</span>
                        </div>
                    ) : (
                        <>
                            {user ? (
                                <div className='flex items-center gap-2'>
                                    <Link href={'/my-profile'}>
                                        <Image
                                            src={user.image || '/favicon.png'}
                                            alt="Profile"
                                            width={50}
                                            height={50}
                                            className='w-8 h-8 md:w-10 md:h-10 cursor-pointer rounded-full border border-teal-600'
                                        />
                                    </Link>
                                    <span className='text-gray-700 font-semibold'>{user.name}</span>
                                    <Button size="sm" color="danger" onClick={handleLogout}>Logout</Button>
                                </div>
                            ) : (
                                <>
                                    <Link href={'/register'}>
                                        <Button size="sm" className='md:size-default'>Sign Up</Button>
                                    </Link>
                                    <Link href={'/login'}>
                                        <Button size="sm" className='md:size-default'>Sign In</Button>
                                    </Link>
                                </>
                            )}
                        </>
                    )}
                </div>

                <div className='md:hidden flex items-center'>
                    <Button
                        isIconOnly
                        size="sm"
                        variant="light"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="flex md:hidden"
                    >
                        <FiMenu size={24} />
                    </Button>
                </div>

            </div>

            {mobileMenuOpen && (
                <div className='md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-200 py-4 px-4'>
                    <ul className='flex flex-col gap-3 mb-4'>
                        <li className='font-semibold py-2'>
                            <NavLink href={'/'} onClick={() => setMobileMenuOpen(false)}>Home</NavLink>
                        </li>
                        <li className='font-semibold py-2'>
                            <NavLink href={'/all-tiles'} onClick={() => setMobileMenuOpen(false)}>All Tiles</NavLink>
                        </li>
                        <li className='font-semibold py-2'>
                            <NavLink href={'/my-profile'} onClick={() => setMobileMenuOpen(false)}>My Profile</NavLink>
                        </li>
                    </ul>
                    <div className='flex flex-col gap-2'>
                        {!loading && (
                            <>
                                {user ? (
                                    <div className='flex items-center justify-between gap-2'>
                                        <div className='flex items-center gap-2'>
                                            <Link href={'/my-profile'} onClick={() => setMobileMenuOpen(false)}>
                                                <Image
                                                    src={user.image || '/favicon.png'}
                                                    alt="Profile"
                                                    width={50}
                                                    height={50}
                                                    className='w-8 h-8 md:w-10 md:h-10 cursor-pointer rounded-full border border-teal-600'
                                                />
                                            </Link>
                                            <span className='text-gray-700 font-semibold'>{user.name}</span>
                                        </div>
                                        <Button size="sm" color="danger" onClick={handleLogout}>Logout</Button>
                                    </div>
                                ) : (
                                    <>
                                        <Link href={'/register'} onClick={() => setMobileMenuOpen(false)}>
                                            <Button size="sm" className='w-full'>Sign Up</Button>
                                        </Link>
                                        <Link href={'/login'} onClick={() => setMobileMenuOpen(false)}>
                                            <Button size="sm" className='w-full'>Sign In</Button>
                                        </Link>
                                    </>
                                )}
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;