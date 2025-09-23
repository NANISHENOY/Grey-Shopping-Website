import React from 'react'
import './footer.css'
import footer_logo from '../Assest/Ecommerce_Frontend_Assets/Assets/logo_big.png'
import imgs from '../Assest/Ecommerce_Frontend_Assets/Assets/instagram_icon.png'
import imgs2 from '../Assest/Ecommerce_Frontend_Assets/Assets/pintester_icon.png'
import img3 from '../Assest/Ecommerce_Frontend_Assets/Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>Grey</p>
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Office</li>
            <li>About</li>
            <li>Contact</li>

        </ul>
        <div className="footer-social">
            <div className="footer-icons-container">
                <img src={imgs} alt="" />            
        </div>
        <div className="footer-icons-container">
                <img src={imgs2} alt="" />            </div>
    
                <div className="footer-icons-container">
         <img src={img3} alt="" />     
                </div>
                </div>
               
                <div className="footer-copy">
                    <hr />
                    <p>Copyrights @ 2023 - All Rights Reserved.</p>
                </div>
    </div>
  )
}

export default Footer