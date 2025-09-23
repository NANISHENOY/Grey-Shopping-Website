import React, { useContext } from 'react'
import './Cart.css'
import { ShopContext } from '../Context/ShopContext'
import remove from '../Components/Assest/Ecommerce_Frontend_Assets/Assets/cart_cross_icon.png'

export const Cart = () => {
  const { all_product, cartItems, removeFromCart, updateSize, updateCartQuantity } = useContext(ShopContext);

  // size-based price adjustment
  const sizePrice = {
    S: 0,
    M: 20,
    L: 30,
    XL: 50
  };

  const getSubtotal = () => {
    let total = 0;
    for (let i = 0; i < all_product.length; i++) {
      if (cartItems[all_product[i].id]?.quantity > 0) {
        const size = cartItems[all_product[i].id].size;
        const price = all_product[i].new_price + sizePrice[size];
        total += price * cartItems[all_product[i].id].quantity;
      }
    }
    return total;
  };

  const subtotal = getSubtotal();
  const shippingFee = subtotal > 100 ? 0 : 10;
  const finalTotal = subtotal + shippingFee;

  return (
    <div className='cart'>
      {/* Cart Header */}
      <div className="main">
        <p>Products</p>
        <p>Title</p>
        <p>Size</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {/* Cart Items */}
      {all_product.map((e) => {
        if (cartItems[e.id]?.quantity > 0) {
          const size = cartItems[e.id].size;
          const price = e.new_price + sizePrice[size];
          return (
            <div key={e.id}>
              <div className="format">
                <img src={e.image} alt={e.name} className='carticon_product_icon' />
                <p>{e.name}</p>

                {/* Size Selector */}
                <select 
                  value={size} 
                  onChange={(ev) => updateSize(e.id, ev.target.value)}
                >
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
                </select>

                <p>${price}</p>

                {/* Quantity Selector (like size) */}
                <select 
                  value={cartItems[e.id].quantity} 
                  onChange={(ev) => updateCartQuantity(e.id, Number(ev.target.value))}
                >
                  {[...Array(10).keys()].map(num => (
                    <option key={num + 1} value={num + 1}>{num + 1}</option>
                  ))}
                </select>

                <p>${price * cartItems[e.id].quantity}</p>
                <img 
                  src={remove} 
                  onClick={() => removeFromCart(e.id)} 
                  alt="Remove" 
                  className="remove-icon" 
                />
              </div>
              <hr />
            </div>
          )
        }
        return null;
      })}

      {/* Cart Summary */}
      <div className="cart-summary">
        <h2>Order Summary</h2>
        <div className="summary-row">
          <p>Subtotal:</p>
          <p>${subtotal}</p>
        </div>
        <div className="summary-row">
          <p>Shipping Fee:</p>
          <p>{shippingFee === 0 ? "Free" : `$${shippingFee}`}</p>
        </div>
        <div className="summary-row total">
          <p>Total:</p>
          <p>${finalTotal}</p>
        </div>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  )
}
