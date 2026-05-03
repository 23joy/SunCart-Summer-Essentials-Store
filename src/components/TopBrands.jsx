import Image from 'next/image';
import React from 'react';
import { TbBrandDropbox } from 'react-icons/tb';
import Brand1 from '../../public/brand1.jpg'
import Brand2 from '../../public/shoes.jpg'
import Brand3 from '../../public/brand3.jpg'

const TopBrands = () => {
    return (
        <div className='container mx-auto mt-10 bg-violet-500 p-7 rounded-xl'>
            <h2 className='font-extrabold text-2xl text-shadow-indigo-600 underline flex gap-2 justify-center items-center mb-10'><TbBrandDropbox></TbBrandDropbox> Top Brands</h2>
            <div className='gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 '>
                <div className='relative w-full aspect-square'>
                    <Image src={Brand1} 
                    alt='brand1' 
                    fill 
                    className='rounded-2xl object-cover'/>
                </div>
                <div className='relative w-full aspect-square'>
                    <Image src={Brand2} 
                    alt='brand2' 
                    fill 
                    className='rounded-2xl object-cover'/>
                </div>
                <div className='relative w-full aspect-square'>
                    <Image src={Brand3} 
                    alt='brand3' 
                    fill 
                    className='rounded-2xl object-cover'/>
                </div>
            </div>
        </div>
    );
};

export default TopBrands;