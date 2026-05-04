'use client'
import Link from 'next/link';
import React from 'react';
import { montserrat } from '@/lib/font'
import logo from '../../public/suncart.webp'
import Image from 'next/image';
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';
import { Avatar, Button } from '@heroui/react';


const Navbar = () => {
    const userData = authClient.useSession()
    const user = userData.data?.user;


    const handleSignOut = async () => {
        await authClient.signOut();
    }
    console.log(user)
    return (
        <div className="navbar bg-base-100 shadow-sm justify-between">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <ul className="p-2">
                               <li><NavLink href="/"  >Home</NavLink></li>
                                <li><NavLink href="/allProduct">Products</NavLink></li>
                                <li><NavLink href="/profile">My Profile</NavLink></li>
                            </ul>
                        </li>

                    </ul>
                </div>
                <div className="flex items-center gap-3 hidden md:block lg:block sm:block">
                     <Link href={"/"} className={`${montserrat.className}  text-blue-600 flex justify-center items-center `} >
                         <Image src={logo} alt='logo' height='50' width='50' className='bg-none'></Image>
                         <h2 className='font-extrabold text-4xl'>Sun<span className='text-emerald-500'>Cart</span></h2></Link>
                 </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink href="/"  >Home</NavLink></li>
                    <li><NavLink href="/allProduct">Products</NavLink></li>
                    <li><NavLink href="/profile">My Profile</NavLink></li>
                </ul>
            </div>
            <div className='flex gap-4'>
                    {!user && (<ul className='flex items-center text-sm gap-3'>
                        <li  className='hover:bg-blue-600 text-black duration-900 rounded-xl p-2'><Link href={'/login'}>Login</Link></li>
                        <li  className='hover:bg-emerald-700 text-black duration-900 rounded-xl p-2'><Link href={'/signup'}>Register</Link></li>
                    </ul>)}
                    {user && (<div className='flex gap-3 justify-center'>
                        <Avatar size='sm'>
                            <Avatar.Image alt="John Doe"
                                src={user?.image}
                                referrerPolicy='no-referrer'
                            />
                            <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                        </Avatar>
                        <Button onClick={handleSignOut} size='sm' variant='danger'>SignOut</Button>
                    </div>)}
                </div>
        </div>
        
    );
};

export default Navbar;
