import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll';
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'
import menu_icon_closed from '../../assets/menu-icon-closed.png'

const Navbar = () => {

     const [sticky, setSticky] = useState(false);
     const [mobileMenu, setMobileMenu] = useState(false);

     useEffect(()=>{
      window.addEventListener('scroll', ()=>{
        window.scrollY > 50 ? setSticky(true) : setSticky(false);
      })
     },[]);



     const toggleMenu = ()=>{
      mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    };

     const closeMenu = () => {
      setMobileMenu(false);
    };

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
      <img src={logo} alt='' className='logo'/>
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li><Link to='hero' spy={true} smooth={true} offset={0} duration={500} onClick={closeMenu}>Home</Link></li>
        <li><Link to='program' spy={true} smooth={true} offset={-260} duration={500} onClick={closeMenu}>Program</Link></li>
        <li><Link to='about' spy={true} smooth={true} offset={-150} duration={500} onClick={closeMenu}>About us</Link></li>
        <li><Link to='campus' spy={true} smooth={true} offset={-260} duration={500} onClick={closeMenu}>Campus</Link></li>
        <li><Link to='testimonials' spy={true} smooth={true} offset={-260} duration={500} onClick={closeMenu}>Testimonials</Link></li>
        <li><Link to='contact' spy={true} smooth={true} offset={-260} duration={500} onClick={closeMenu} className='btn'>Contact us</Link></li>
      </ul>
      <img src={mobileMenu ? menu_icon_closed : menu_icon} alt='' className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar