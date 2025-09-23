import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assest/Ecommerce_Frontend_Assets/Assets/logo.png'
import cart_icon from '../Assest/Ecommerce_Frontend_Assets/Assets/cart_icon.png'
import { Link } from 'react-router-dom';
export const Navbar = () => {

const [menu,setMenu]=  useState("shop");



  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="" />
            <p>GREY STORE</p>
        </div>
        <div className='nav-menu'>
            
                <p onClick={()=>setMenu("shop")} > <Link style={{textDecoration:'none'}} to='/'>Shop </Link>{menu==="shop"?<hr/>:<></>}</p>
                <p onClick={()=>setMenu("mens")} > <Link style={{textDecoration:'none'}}  to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</p>
                <p onClick={()=>setMenu("womens")} > <Link style={{textDecoration:'none'}}  to='/womens'>Women </Link> {menu==="womens"?<hr/>:<></>}</p>
                <p onClick={()=>setMenu("kids")} > <Link  style={{textDecoration:'none'}}  to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</p>
            
            </div>
            <div className="admin">
            <Link to='/admin'> <button>Admin</button></Link>
            </div>
            <div className='nav-login-cart'>
               <Link to='/login'> <button>Login</button></Link>
               
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">0</div>
            </div>
            
           
    </div>
    
  )
}
