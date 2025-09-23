import React from 'react'
import './Login.css'

export const Login = () => {
  return (
    <div className="loginsignup">
      <div className="container"><h1>Sign up</h1></div>
      <div className="fills">
        <input type="text" placeholder='Your Name' name="" id="" />
        <input type="email" placeholder='E-Mail'/>
        <input type="password" placeholder='Enter a Passwaord' /></div>
     
      <div><center><button>Continue </button></center>
        
        <p className="login">Already Have An Account? <span>Login Here</span></p>
        <div className="agree">
          <input type="checkbox" name='' id=''/>
          <p>By continuing, I agree to the terms of use & privacy policy...</p>
        </div>
      </div>
    </div>
    
  )
}
