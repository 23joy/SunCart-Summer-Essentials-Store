import React from 'react';
import ProductCard from './ProductCard';

const Popular =async () => {
    const productRes=await fetch("https://sun-cart-summer-essentials-store-delta.vercel.app/data.json")
    const products=await productRes.json()
    const product=products.slice(0,3);
    console.log(product)
    return (
        <div>
            <h2 className='font-bold text-2xl'>Popular Product</h2>
           <div className='grid grid-cols-3 gap-5 m-10 items-center justify-center'>
             {product.map((product=> <ProductCard key={product.id} product={product}></ProductCard>))}
           </div>
        </div>
    );
};

export default Popular;