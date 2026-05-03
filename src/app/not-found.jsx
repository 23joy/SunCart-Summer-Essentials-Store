import { Button, Card } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import { BsBack } from 'react-icons/bs';

const NotFound = () => {
    return (
        <Card className='py-10 container mx-auto'>
            <div className='flex flex-col justify-center items-center'>
                <h2 className='font-extrabold text-6xl text-red-600'>404</h2>
                <h2 className='font-bold text-2xl m-3'>oops! Page Not Found</h2>
                <p className='mt-2 text-gray-400 max-w-md mx-auto '>The page you're looking for doesn’t exist or has been moved.</p>
                <Link href={'/'} className='m-3'>
                    <Button><BsBack /> Back To Home</Button>
                </Link>
            </div>
        </Card>
    );
};

export default NotFound;