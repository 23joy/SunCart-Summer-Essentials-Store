import Link from 'next/link';
import React from 'react';
import { FaRegCircleUser } from 'react-icons/fa6';
import {montserrat} from '@/lib/font'
import logo from '../../public/suncart.webp'
import Image from 'next/image';


const Navbar = () => {
    return (
        <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg " >
            <header className="flex h-16 items-center justify-between px-6">
                <div className="flex items-center gap-3">
                    <Link href={"/"} className={`${montserrat.className}  text-blue-600 flex justify-center items-center `} >
                    <Image src={logo} alt='logo' height='50' width='50' className='bg-none'></Image>
                    <h2 className='font-extrabold text-4xl'>Sun<span className='text-emerald-500'>Cart</span></h2></Link>
                </div>
                <ul className="flex items-center gap-4">
                    <li><Link href="/" >Home</Link></li>
                    <li><Link href="/allProduct">Products</Link></li>
                    <li><Link href="profile">My Profile</Link></li>
                </ul>
                <div className='flex gap-4'>
                    <ul className='flex items-center text-sm gap-3'>
                        <li><Link href={'/signup'} className='btn'>SignUP</Link></li>
                        <li><Link href={'/signin'} className='btn'>SignIn</Link></li>
                    </ul>
                </div>
            </header>
        </nav>
    );
};

export default Navbar;