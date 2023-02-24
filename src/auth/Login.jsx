import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const Login = () => {
  return (
    <>
      <div className='signup'>
        <div className="form">
        <h1>Login now</h1>
          <p>email<span>*</span></p>
          <input type="email" placeholder='enter your email' />
          <p>password<span>*</span></p>
          <input type="password" placeholder='enter your password'/>
          <button>register</button>
          <p className='already'>don't have email <Link className='link' to='/signup'>register now</Link></p>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default Login