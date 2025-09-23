import React from 'react'
import './Offer.css'
import exclusive from '../Assest/Ecommerce_Frontend_Assets/Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers_left">
            <h1>EXCLUSIVE</h1>
            <h1>OFFERS FOR YOU</h1>
            <p>ONLY ON BEST SELLER PRODUCT</p>
            <button>CHECK NOW</button>
        </div>

        <div className="offers_right">
            <img src={exclusive} alt="" />
        </div>
        
    </div>
  )
}

export default Offers