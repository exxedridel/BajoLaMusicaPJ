import React from 'react';
import { Link } from "react-router-dom";
import '../styles/NewPassword.scss';

const NewPassword = () => {
	return (
		<div className="NewPassword">
			<div className="NewPassword-container">
				{/* <img src="./logos/logo_bajo_musica" alt="logo" className="logo" /> */}
				<h1 className="title">Create a new password</h1>
				<p className="subtitle">Enter a new password for your account</p>
				<form action="/" className="form">
					<label htmlFor="password" className="label">New password</label>
					<input type="password" id="password" placeholder="*********" className="input input-password" />
					<label htmlFor="new-password" className="label">Confirm password</label>
					<input type="password" id="new-password" placeholder="*********" className="input input-password" />
					<Link to="/account">
						<input type="submit" value="Confirm" className="primary-button login-button" />
					</Link>
				</form>
			</div>
		</div>
	);
}

export default NewPassword;
