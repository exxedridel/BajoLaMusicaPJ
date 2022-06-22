import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "@styles/Header.scss";
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
        <Link to="/login">
          <img src={logo} alt="logo" className="nav-logo" />
        </Link>

        <ul>
          <li>
            <Link to="/vlog">Vlog</Link>
          </li>
          <li>
            <Link to="/news">Noticias</Link>
          </li>
          <li>
            <Link to="/Contact">Contacto</Link>
          </li>
          <li>
            <Link to="/">NFTs</Link>
          </li>
        </ul>

      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleToggle}>
            hevedrios@gmail.com
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
      {toggleMobile && <MobileMenu handleToggleMobile={handleToggleMobile}/>}
      {toggle && <Menu handleToggle={handleToggle} />}
      {toggleOrders && <MyOrder toggleOrders={toggleOrders} setToggleOrders={setToggleOrders} />}
    </nav>
  );
};

export default Header;
