import { Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProductCard = ({ product }) => {

    return (
        <Card className='rounded-xl'>
            <div className='relative w-full aspect-square'>
                <Image src={product.image}
                    fill
                    alt={product.name}
                    className='rounded-xl object-cover'
                >
                </Image>
            </div>
            <div className='flex flex-col justify-center '>
                <h2 className='font-bold text-xl'>Product-Name:{product.name}</h2>
                <p className=' font-semibold'>Rating:{product.rating}</p>
                <p className='font-semibold'>Price{product.price}</p>
            </div>
            <Link href={'/productDetails'}>
            <button className='btn'>Product Details</button>
            </Link>
        </Card>
    );
};

export default ProductCard;