import AllProduct from '@/components/AllProduct';
import React from 'react';

const AllProductPage =async () => {
    const res=await fetch('https://sun-cart-summer-essentials-store-delta.vercel.app/data.json')
    const allProduct=await res.json()
    // console.log(allProduct)
    
    return (
        <div className='max-w-[80%] mx-auto mb-10 '>
            <h2 className='font-bold text-2xl mb-10'>All Product: <span className='text-emerald-700'>{allProduct.length}</span></h2>
            <div className='grid grid-cols-3 gap-5 '>
                {allProduct.map((all)=><AllProduct key={all.id} all={all}></AllProduct>)}
            </div>
        </div>
    );
};

export default AllProductPage;