import { Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const ProductCard = ({product}) => {

    return (
        <Card>
            <div>
                <Image src={product.image} 
                alt={product.name}
                 width={200} 
                height={200}></Image>
            </div>
        </Card>
    );
};

export default ProductCard;