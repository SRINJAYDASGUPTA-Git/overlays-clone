import React from 'react'

interface ProductProps {
    img: string;
    name: string;
    price: number;
    }

const ProductCard = ({img, name, price}:ProductProps) => {
  return (
    <div className='flex-center flex-col w-[230px] h-[410px] rounded-md'>
        <img src={img} alt={name} className='w-full h-[75%] object-cove rounded-md'/>
        <div className='text-lg text-center'>{name}</div>
        <div className='text-lg '>₹ {price}</div>
    </div>
  )
}

export default ProductCard