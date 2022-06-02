import React from "react";
import { Link } from "react-router-dom";
import "../styles/MobileMenu.scss";

const MobileMenu = () => {
  return (
    <div className="mobile-menu">
      <ul>
        <li className="mobile-title">
          <Link to="/login">BAJO LA MUSICA</Link>
        </li>
        <li>
          <Link to="/404">Vlog</Link>
        </li>
        <li>
          <Link to="/404">Noticias</Link>
        </li>
        <li>
          <Link to="/Contact">Contacto</Link>
        </li>
        <li>
          <Link to="/">NTFs</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/orders">My orders</Link>
        </li>
        <li>
          <Link to="/account">My account</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/account" className="email">
            hevedrios@gmail.com
          </Link>
        </li>
        <li>
          <Link to="/login" className="sign-out">
            Sign out
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
