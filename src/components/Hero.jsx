import Link from 'next/link';
import React from 'react';

const Hero = () => {
    return (
        <div
            className="hero min-h-screen mx-auto container md:h-[500px] object-contain md:object-cove rounded-xl mt-5"
            style={{
                backgroundImage:
                    "url('https://png.pngtree.com/thumb_back/fh260/background/20231221/pngtree-shopping-cart-gift-box-orange-creative-background-image_15551116.png')",
            }}
        >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md text-emerald-600">
                    <h1 className="mb-5 text-5xl font-bold text-orange-500 animate__animated animate__slideInLeft">Hello! Customers</h1>
                    <div className='mb-5 text-2xl font-bold'>
                        <p>LIMITED TIME OFFERS</p>
                        <h1>BIG Sale</h1>
                        <h2>Summer Sale<span className='text-emerald-600'> 50% </span>Off</h2>
                        <p className='text-fuchsia-500'>Hot Deals 🔥</p>
                    </div>
                    <Link href='/' className="btn btn-primary">Shop Now</Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;