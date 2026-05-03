import AllProduct from '@/components/AllProduct';
import React from 'react';

const AllProductPage =async () => {
    const res=await fetch('https://sun-cart-summer-essentials-store-delta.vercel.app/data.json')
    const allProduct=await res.json()
    // console.log(allProduct)
    
    return (
        <div className='max-w-[80%] mx-auto m-5 '>
            <h2 className='font-bold text-2xl mb-10'>All Product: <span className='text-emerald-700'>{allProduct.length}</span></h2>
            <div className='gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
                {allProduct.map((all)=><AllProduct key={all.id} all={all}></AllProduct>)}
            </div>
        </div>
    );
};

export default AllProductPage;