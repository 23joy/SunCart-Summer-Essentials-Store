import React from 'react';
import ProductCard from './ProductCard';

const Popular =async () => {
    const productRes=await fetch("https://sun-cart-summer-essentials-store-delta.vercel.app/data.json")
    const products=await productRes.json()
    const product=products.slice(0,3);
    return (
        <div>
            <h2 className='font-bold underline text-blue-900 text-2xl  m-10 text-center'>Popular Product</h2>
           <div className='gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
             {product.map((product=> <ProductCard key={product.id} product={product}></ProductCard>))}
           </div>
        </div>
    );
};

export default Popular;