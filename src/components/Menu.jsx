import React from "react";
import {Link} from "react-router-dom";
import "../styles/Menu.scss";

const Menu = ({handleToggle}) => {
  return (
    <div className="Menu">
      <ul>
        <li>
          <Link to="/orders" className="title" onClick={handleToggle}>
            My orders
          </Link>
        </li>
        <li>
          <Link to="/account" onClick={handleToggle}>My account</Link>
        </li>
        <li>
          <Link to="/login" onClick={handleToggle}>Sign out</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
