import React from 'react'
import './LoginForm.css'
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import 'animate.css';

const LoginForm = () => {
  return (
    <div className='animate__rubberBand'> 
    <div className='wrapper'> 
<form action="">
    <h1>Login</h1>
    <div className="input-box">
        <input type="text" placeholder='Username' required />
        <FaUser className='icon' />
    </div> 
    <div className="input-box">
        <input type="password" placeholder='Password' required />
        <FaLock className='icon'/>
    </div>
    <div className="remember-forgot">
        <label> <input type="checkbox" />Remember me</label>
        <a href="#">Forgot password?</a>
    </div>
   <button type='submit'>Login</button> 
   <div className="register-link">
    <p>Don't have an account? <a href="#">Register here</a></p>
   </div>
</form>
    </div>
    </div>
  )
}

export default LoginForm