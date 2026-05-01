import { Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const ProductDetailsPage =async({params}) => {
    const {id}=await params;
    const res=await fetch('https://sun-cart-summer-essentials-store-delta.vercel.app/data.json')
    const allProduct=await res.json()
    const product=allProduct.find(p=>p.id==id)
    return (
       <div className='flex flex-col justify-center max-w-[80vh] mx-auto'>
        <h2 className='font-bold text-fuchsia-700 m-5'>Product Details</h2>
         <Card className=' mb-10'>
            <div>
                <Image src={product.image} alt={product.name} width={600}height={600} className='rounded-2xl'/>
                <div>
                    <h2 className='font-bold text-xl'>{product.name}</h2>
                    <p className='font-semibold text-gray-500'>{product.description}</p>
                    <p className='font-bold'><span className='font-bold text-blue-600'>Brand</span> : {product.brand}</p>
                    <p className='font-bold'><span className='text-emerald-600'>Stock</span>:{product.stock}</p>
                    <p className='font-bold'><span className='text-fuchsia-700'>Category</span>:{product.category}</p>
                </div>
            </div>
        </Card>
       </div>
    );
};

export default ProductDetailsPage;