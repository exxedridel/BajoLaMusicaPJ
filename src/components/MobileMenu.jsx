import React from "react";
import "../styles/MobileMenu.scss";

const MobileMenu = () => {
  return (
    <div class="mobile-menu">
      <ul>
        <li className="mobile-title">
          <a href="/login">BAJO LA MUSICA</a>
        </li>
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
          <a href="/">NTFs</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="/orders">My orders</a>
        </li>
        <li>
          <a href="/account">My account</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="/account" class="email">
            bajolamusica@gmail.com
          </a>
        </li>
        <li>
          <a href="/login" class="sign-out">
            Sign out
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
