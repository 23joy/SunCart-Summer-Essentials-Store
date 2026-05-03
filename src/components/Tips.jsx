import Image from 'next/image';
import React from 'react';
import { TbBrandDropbox } from 'react-icons/tb';
import Skincare from '../../public/skincare.jpg'
import Skincare2 from '../../public/skincare2.png'
import Skincare3 from '../../public/skincare3.webp'

const Tips = () => {
    return (
        <div className='container mx-auto mt-10 bg-violet-500 p-7 rounded-xl'>
            <h2 className='font-extrabold text-2xl text-shadow-indigo-600 underline flex gap-2 justify-center items-center mb-10'><TbBrandDropbox></TbBrandDropbox> Top Brands</h2>
            <div className='gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 '>
                <div className='relative w-full aspect-square'>
                    <Image src={Skincare}
                        alt='skincare'
                        fill
                        className='rounded-2xl object-cover' />
                </div>
                <div className='relative w-full aspect-square'>
                    <Image src={Skincare2}
                        alt='sinkcare2'
                        fill
                        className='rounded-2xl object-cover' />
                </div>
                <div className='relative w-full aspect-square'>
                    <Image src={Skincare3}
                        alt='skincare3'
                        fill
                        className='rounded-2xl object-cover' />
                </div>
            </div>
        </div>
    );
};

export default Tips;