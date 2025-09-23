import React, { useContext } from 'react'
import'./CSS/Shopcat.css'
import Item from '../Components/Item/Item'
import { ShopContext } from '../Context/ShopContext'
import drop from '../Components/Assest/Ecommerce_Frontend_Assets/Assets/dropdown_icon.png'
const Shopcat = (props) => {
  const {all_product}=useContext(ShopContext);
  return (

    <div className="shop-cat">
      <img src={props.banner} alt="" />
      <p style={{fontWeight:600}}><span >Showing 1-12</span> Out of 36 products</p>
      <p style={{fontWeight:600}}>Sort by <img src={drop} alt="" /></p>
      <div className="shopcat-index">
        <p><span>Showing 1-12</span> Out of 36 products</p>
<div className="shopcat-sort">
  Sort by <img src={drop} alt="" />
</div>
<div className="shopcat-product">
  {all_product.map((item,i)=>{
    
  if (item.category.toLowerCase()===(props.category.toLowerCase())) {
    
      return <Item  key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
      }
      else{
        return null;
      }
   

  })}
</div>

      </div>
      <div className="explore">
  Expore More
</div>
    </div>
  )
}

export default Shopcat;