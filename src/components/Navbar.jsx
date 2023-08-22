import React from "react";
import logo from '../assets/burgerlogo.png'
import {Link} from 'react-router-dom'
import '../style/navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="main">
        <img src={logo} alt="Burger Yiyelim" />
        <div className="mainLink">
            <Link to={'/'}>Anasayfa</Link>
            <Link to={'/about'}>Hakkımıza</Link>
            <Link to={'/menu'}>Menü</Link>
            <Link to={'/contact'}>İletişim</Link>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
