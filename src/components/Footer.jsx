import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
        <footer className='footer'>
        <div className="container-footer">
            <div className="box-footer">
                <h1>our links</h1>
                <Link className='link' to="/">Home</Link>
                <Link className='link' to="/about">About us</Link>
                <Link className='link' to="/menu">Menu</Link>
                <Link className='link' to="/contact">Contact</Link>
                <Link className='link' to="/signup">signup</Link>
            </div>
           <div className="box-socail">
                <h1>our socail medie</h1>
                <Link className='link' to=''>Facebook</Link>
                <Link className='link' to=''>instagram</Link>
                <Link className='link' to=''>Linkedin</Link>
                <Link className='link' to=''>YouTube</Link>
                <Link className='link' to=''>TikTok</Link>
           </div>
        </div>
    </footer>
        <div className="copyright">
            <h1>© copyright @2023 by <span>MR.Mohamed Shams</span> | all rights reserved</h1>
        </div>
    </>
  )
}

export default Footer