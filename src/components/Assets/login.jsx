import React from 'react'
import './components/login.css'
import image from '../Assets/images(1).jpeg'

const login = () => {
  return (
    <div className='container'>
       <div className="header">
        <img src={image} alt=''/>
        <div className="text">Login</div>
        <div className="underline"></div>
       </div>
       <div className="inputs">
        <div className="inputs">
            <input type='text'/>
        </div>
        <div className="inputs">
            <input type='email'/>
        </div>
        <div className="inputs">
            <input type='password'/>
        </div>
        <div className="forgot-password">Forgot password?<span>click Here!</span></div>
       </div>
       <div className="submit-container">
        <div className="submit">Sign Up</div>
        <div className="submit">Login</div>
       </div>
    </div>
  )
}

export default login
