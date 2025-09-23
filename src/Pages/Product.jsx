import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import { Bread } from '../Components/Bread/Bread';
import ProductDis from '../Components/ProductDis/ProductDis';
import Des from '../Components/Descripbox/Des';
import Related from '../Components/Realted/Related';

export const Product = () => {
  const{all_product}=useContext(ShopContext);
  
  const{productId}=useParams();
  const product =all_product.find((e)=>e.id=== Number(productId));
  return (
    <div>
      <Bread product={product}/>
      <ProductDis product={product}/>
      <Des/>
      <Related/>items

    </div>
  )
}