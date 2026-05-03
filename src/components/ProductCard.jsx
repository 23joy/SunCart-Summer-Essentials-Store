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
                <h2 className='font-bold text-xl text-blue-500'><span className='text-emerald-500'>Product-Name</span> : {product.name}</h2>
                <p className=' font-semibold text-fuchsia-500'>Rating:{product.rating}</p>
                <p className='font-semibold text-purple-600'>Price{product.price}</p>
            </div>
            <Link href={`/productDetails/${product.id}`}>
            <button className='btn w-full rounded-xl text-red-400'>Product Details</button>
            </Link>
        </Card>
    );
};

export default ProductCard;