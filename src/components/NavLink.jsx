'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href,children}) => {
    const pathaname=usePathname();
    const isActive=href===pathaname
    return (
        <Link href={href} className={`${isActive ? 'border-b-2 border-b-amber-600 text-green-700':''}`}>{children}</Link>
    );
};

export default NavLink;