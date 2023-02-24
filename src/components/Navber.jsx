import React, { useEffect, useState } from 'react'
import { Outlet, Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
const Navber = () => {

  const [toggleMenu , setToggleMenu] = useState(false);
  const [screenWidth, setscreenWidth] = useState(window.innerWidth)


   const NavberMenue = () => {
     setToggleMenu(!toggleMenu)
   }
 
    useEffect(() => { 
     const changeWidth = () => {
       setscreenWidth(window.innerWidth)
     }
     window.addEventListener('resize' , changeWidth)
 
     return () =>{
       window.removeEventListener('resize' , changeWidth)
     }
 
     }, [])


  return (
    <div className='container-nav'>
        <Link to="/" className='logn'>Sandwich</Link>
        {(toggleMenu || screenWidth > 768) && (
        <nav className='navber'>
          <Link className='link' to="/">Home</Link>
          <Link className='link' to="/about">About us</Link>
          <Link className='link' to="/menu">Menu</Link>
          <Link className='link' to="/contact">Contact</Link>
          <Link className='link' to="/signup">signup</Link>
          <Outlet />
        </nav>
         )}
          <AiOutlineMenu onClick={NavberMenue} className='menu' />
    </div>
  )
}

export default Navber
