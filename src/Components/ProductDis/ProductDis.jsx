import React, { useContext } from 'react'
import './Product.css'
import star from '../Assest/Ecommerce_Frontend_Assets/Assets/star_icon.png';
import startdull from '../Assest/Ecommerce_Frontend_Assets/Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const ProductDis = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  return (
    <div className='productdis'>
      {/* LEFT SIDE */}
      <div className="left">
        <div className="img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="img">
          <img className='productdis-main-img' src={product.image} alt="" />
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="right">
        <h2>{product.name}</h2>
        <div className="star">
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={startdull} alt="" />
          <p>(122)</p>
        </div>

        <div className="prices">
          <div className="oldprice">${product.old_price}</div>
          <div className="newprice">${product.new_price}</div>
          <div className="des">
            Shirts are a versatile piece of clothing that can be worn for both casual and formal occasions.<br />
            They come in a variety of styles for parties or casual wear, and pair well 
            with jeans, trousers, or shorts — making them one of the most popular fashion choices.
          </div>
        </div>

        <div className="size">
          <h1>Select Size</h1>
          <div className="select">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>

        <button onClick={() => { addToCart(product.id) }}>ADD TO CART</button>

        {/* ✅ Dynamic Category */}
        <p className='productdisplayright'>
          <span>Category : </span>
          {Array.isArray(product.category) ? product.category.join(", ") : product.category}
        </p>

        <p className='productdisplayright'>
          <span>Tags : </span>
          {product.tags ? product.tags.join(", ") : "Modern, Latest"}
        </p>
      </div>
    </div>
  )
}

export default ProductDis;
