import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
  return (
    <div className="newsletter">
        <h1>Get Exclusive Offer</h1>
        <p>Subscribe to our Newletter and Stay Tuned</p>
        <div>
            <input type="email" placeholder='Your E-Mail Id' /> <br /> 
             <button>Subscribe</button>
        </div>
    </div>
  )
}

export default Newsletter