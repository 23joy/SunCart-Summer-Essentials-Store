'use client'
import Link from 'next/link';
import React from 'react';
import { FaRegCircleUser } from 'react-icons/fa6';
import { montserrat } from '@/lib/font'
import logo from '../../public/suncart.webp'
import Image from 'next/image';
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';
import { Avatar, Button } from '@heroui/react';


const Navbar = () => {
    const userData = authClient.useSession()
    const user = userData.data?.user;
    

    const handleSignOut=async()=>{
        await authClient.signOut();
    }
    console.log(user)
    return (
        <nav className="sticky container mx-auto  border-b border-separator bg-background/70 backdrop-blur-lg " >
            <header className="flex h-16 items-center justify-between px-6">
                <div className="flex items-center gap-3">
                    <Link href={"/"} className={`${montserrat.className}  text-blue-600 flex justify-center items-center `} >
                        <Image src={logo} alt='logo' height='50' width='50' className='bg-none'></Image>
                        <h2 className='font-extrabold text-4xl'>Sun<span className='text-emerald-500'>Cart</span></h2></Link>
                </div>
                <ul className="flex items-center gap-4">
                    <li><NavLink href="/"  >Home</NavLink></li>
                    <li><NavLink href="/allProduct">Products</NavLink></li>
                    <li><NavLink href="profile">My Profile</NavLink></li>
                </ul>
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
            </header>
        </nav>
    );
};

export default Navbar;