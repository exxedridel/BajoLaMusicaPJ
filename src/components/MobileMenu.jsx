import React from "react";
import { Link } from "react-router-dom";
import "../styles/MobileMenu.scss";

const MobileMenu = ({handleToggleMobile}) => {
  return (
    <div className="mobile-menu">
      <ul>
        <li className="mobile-title">
          <Link to="/login" onClick={handleToggleMobile}>BAJO LA MUSICA</Link>
        </li>
        <li>
          <Link to="/vlog" onClick={handleToggleMobile}>Vlog</Link>
        </li>
        <li>
          <Link to="/news" onClick={handleToggleMobile}>Noticias</Link>
        </li>
        <li>
          <Link to="/Contact" onClick={handleToggleMobile}>Contacto</Link>
        </li>
        <li>
          <Link to="/" onClick={handleToggleMobile}>NTFs</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/orders" onClick={handleToggleMobile}>My orders</Link>
        </li>
        <li>
          <Link to="/account" onClick={handleToggleMobile}>My account</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/account" className="email" onClick={handleToggleMobile}>
            hevedrios@gmail.com
          </Link>
        </li>
        <li>
          <Link to="/login" className="sign-out" onClick={handleToggleMobile}>
            Sign out
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
