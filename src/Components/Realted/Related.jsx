import React from 'react'
import './Relate.css'
import data_product from'../Assest/Ecommerce_Frontend_Assets/Assets/data'
import Item from '../Item/Item'

const Related = () => {
  return (
    <div className='rp'>
        <h1>
        Related Products
            </h1>
            <hr />
            <div className="items">
                {data_product.map((item,i)=>  { return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>})}


            </div>
            </div>
  )
}

export default Related