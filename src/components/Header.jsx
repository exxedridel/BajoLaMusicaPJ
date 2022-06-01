import React, { useState, useContext } from "react";
import "@styles/Header.scss"; // se cambia el ../ por el arroba al haber puesto el alias en el webpack.config.js, lo busca en la carpeta
import MobileMenu from "./MobileMenu";
import Menu from "@components/Menu";
import MyOrder from "../containers/MyOrder";
import menu from "@icons/icon_menu.svg";
import logo from "@logos/logo_bajo_musica.png";
import AppContext from "../context/AppContext";
import shoppingCart from "@icons/icon_shopping_cart.svg";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const [toggleMobile, setToggleMobile] = useState(false);
  const { state } = useContext(AppContext);

  const handleToggleMobile = () => {
    setToggleMobile(!toggleMobile);
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav className="navbar">
      <img src={menu} alt="menu" className="menu" onClick={handleToggleMobile}/>

      <div className="navbar-left">
        <a href="/login">
          <img src={logo} alt="logo" className="nav-logo" />
        </a>

        <ul>
          <li>
            <a href="/404">Vlog</a>
          </li>
          <li>
            <a href="/404">Noticias</a>
          </li>
          <li>
            <a href="/Contact">Contacto</a>
          </li>
          <li>
            <a href="/">NFTs</a>
          </li>
        </ul>

      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleToggle}>
            bajolamusica@gmail.com
          </li>
          <li 
            className="navbar-shopping-cart" 
            onClick={() => setToggleOrders(!toggleOrders)}
          >
            <img src={shoppingCart} alt="shopping-cart" />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null }
          </li>
        </ul>
      </div>
      {toggleMobile && <MobileMenu />}
      {toggle && <Menu />}
      {toggleOrders && <MyOrder />}
    </nav>
  );
};

export default Header;
