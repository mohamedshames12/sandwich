import React from 'react'
import {Link} from 'react-router-dom';
import Footer from '../components/Footer';

const Signup = () => {
  return (
    <>
            <div className='signup'>
        <div className="form">
        <h1>register now</h1>
          <p>username<span>*</span></p>
          <input type="text" placeholder='enter your name'/>
          <p>phone<span>*</span></p>
          <input type="number" placeholder='enter your phone' />
          <p>email<span>*</span></p>
          <input type="email" placeholder='enter your email' />
          <p>password<span>*</span></p>
          <input type="password" placeholder='enter your password'/>
          <button>register</button>
          <p className='already'>already have email <Link className='link' to='/login'>login now</Link></p>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default Signup