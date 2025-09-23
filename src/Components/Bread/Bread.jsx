import React from 'react'
import './Bread.css'
import arrow from '../Assest/Ecommerce_Frontend_Assets/Assets/arrow.png'

export const Bread = (props) => {
    const {product} =props;
  return (
    <div className='bread'>
        Home <img src={arrow} alt="" />
        Shop <img src={arrow} alt="" />
        {product.category} <img src={arrow} alt="" />
        {product.name} <img src={arrow} alt="" />


    </div>
  )
}
