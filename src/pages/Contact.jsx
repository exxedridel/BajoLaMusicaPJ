import React from "react";
import "../styles/Contact.scss";
import logo from "../assets/logos/logo_bajo_musica.png";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-container">
        <img src={logo} alt="logo" className="logo" />
        <h1 className="title">About us</h1>
        <div className="AboutUs-content">
        <p>
          Bajo la música es un espacio para la divulgación artística donde
          abordamos temas que tienen que ver con la música, así como
          problemáticas sociales que se dan andaycentes a los movimientos
          artísticos y su efecto en nuestro sector. A través de podcast,
          entrevistas y más.
        </p>
		  </div>
      </div>
    </div>
  );
};

export default Contact;
