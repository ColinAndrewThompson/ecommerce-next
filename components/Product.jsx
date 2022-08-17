import React from 'react';
import Link from 'next/link';
import {urlFor} from '../lib/client';

const Product = ({product : {image, Name, slug, price, details}}) => {
  return (
    <div>
      <Link href={`product/${slug.current}`}>
        <div className='product-card'>
          <img 
            src={urlFor(image && image[0])}
            width={250} 
            height={250} 
            className='product-image'/>
          <p className='product-name'>{Name}</p>
          <p className='product-price'>${price}</p>
        </div>
      </Link>

    </div>
  )
}

export default Product