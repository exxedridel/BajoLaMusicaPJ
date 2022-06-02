import React from "react";
import { Link } from "react-router-dom";
import "../styles/SendEmail.scss";
import email from "@icons/email.svg";

const SendEmail = () => {
  return (
    <div className="SendEmail">
      <div className="form-container-email">
        {/* <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" /> */}
        <h1 className="title">Email has been sent!</h1>
        <p className="subtitle">
          Please check your inbox for instructions on how to reset the password
        </p>
        <div className="email-image">
          <img src={email} alt="email" />
        </div>
        <Link to="/login">
          <button className="link-primary-button link-login-button">
            Login
          </button>
        </Link>
        <p className="resend">
          <span>Didn't receive the email?</span>
          <Link to="/password-recovery"> Resend</Link>
        </p>
      </div>
    </div>
  );
};

export default SendEmail;
