import { Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AllProduct = ({ all }) => {
    console.log(all);
    return (
        <Card className='rounded-xl'>
            <div className='relative w-full aspect-square max-w-[80vh] mx-auto '>
                <Image src={all.image}
                    fill
                    alt={all.name}
                    className='rounded-xl object-cover'
                >
                </Image>
            </div>
            <div className='flex flex-col justify-center '>
                <h2 className='font-bold text-xl'>Product-Name:{all.name}</h2>
                <p className=' font-semibold'>Rating:{all.rating}</p>
                <p className='font-semibold'>Price{all.price}</p>
            </div>
            <Link href={`/productDetails/${all.id}`}>
                <button className='btn w-full rounded-xl'>Product Details</button>
            </Link>
        </Card>
    );
};

export default AllProduct;