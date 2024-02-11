import React from 'react'
interface ProducProps {
    label: string;
    price: number;
    sizes: string[];
    primaryImgURL: string;
    secondaryImgURL: string;
    }
const Products = ({label, price, sizes, primaryImgURL, secondaryImgURL}: ProducProps) => {
  return (
    <div>Products</div>
  )
}

export default Products