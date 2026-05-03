"use client"
import { Card, Spinner } from '@heroui/react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FiEdit2 } from 'react-icons/fi';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';

const MyProfilePage = () => {
    const router = useRouter();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSession = async () => {
            try {
                const { data: session } = await authClient.getSession();
                if (session?.user) {
                    setUser(session.user);
                } else {
                    router.push('/login');
                }
            } catch (error) {
                console.error('Error fetching session:', error);
                router.push('/login');
            } finally {
                setLoading(false);
            }
        };
        fetchSession();
    }, [router]);

    if (loading) {
        return (
            <div className="flex flex-col items-center gap-2 max-w-md mx-auto p-8 text-center">
                <Spinner size="xl" />
                <span className="text-xs text-muted">Loading... Please Wait!</span>
            </div>
        );
    }

    if (!user) {
        return null;
    }

    return (
        <div className="container mx-auto my-10 px-4">
            <Card className="max-w-md mx-auto p-8 text-center">
                <div className="relative inline-block mx-auto">
                    <Image
                        src={user.image || '/favicon.png'}
                        alt="Profile"
                        width={100}
                        height={100}
                        className='w-32 h-32 mx-auto border-4 border-teal-500 rounded-full object-cover'
                    />
                    <button className="absolute bottom-0 right-0 bg-teal-600 rounded-full p-2 text-white hover:bg-teal-700 transition">
                        <FiEdit2 size={16} />
                    </button>
                </div>

                <h1 className="text-2xl font-bold mt-4">{user.name}</h1>
                <p className="text-gray-500 mt-1">{user.email}</p>
            </Card>
        </div>
    );
};

export default MyProfilePage;