"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({ href, children }) => {
    const pathname = usePathname();

    const isActive = href === pathname;

    return <Link
        href={href}
        className={`px-4 py-2 rounded-lg transition-all duration-300 font-medium text-sm flex items-center justify-center
        ${isActive
                ? "bg-teal-600 text-white shadow-md shadow-teal-200 scale-105"
                : "text-slate-600 hover:bg-teal-50 hover:text-teal-600"
            }`}
    > {children}
    </Link>
};

export default NavLink;