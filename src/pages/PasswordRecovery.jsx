import React from 'react';
import '../styles/PasswordRecovery.scss';
// import logoYard from "@logos/logo_bajo_musica.png";

const PasswordRecovery = () => {
	return (
		<div className="PasswordRecovery">
			<div className="PasswordRecovery-container">
				{/* <img src={logoYard} alt="logo" className="login-logo" /> */}
				<h1 className="title">Password recovery</h1>
				<p className="subtitle">Inform the email address used to create your account</p>
				<form action="/send-email" className="form">
					<label htmlFor="email" className="label">Email address</label>
					<input type="text" id="email" className="input input-email" />
					<input type="submit" value="Confirm" className="primary-button login-button" />
				</form>
			</div>
		</div>
	);
}

export default PasswordRecovery;
