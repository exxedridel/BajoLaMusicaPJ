import React from 'react';
import { Link } from "react-router-dom";
import '../styles/MyAccount.scss';

const MyAccount = () => {
	return (
		<div className="MyAccount">
			<div className="MyAccount-container">
				<h1 className="title">My account</h1>
				<form action="/" className="form">
					<div>
						<label htmlFor="name" className="label">Name</label>
						<p className="value">Heved Rios</p>
						<label htmlFor="email" className="label">Email</label>
						<p className="value">hevedrios@gmail.com</p>
						<label htmlFor="password" className="label">Password</label>
						<p className="value">*********</p>
					</div>
					<Link to="/new-password">
						<input type="submit" value="Change password" className="secondary-button login-button" />
					</Link>
				</form>
			</div>
		</div>
	);
}

export default MyAccount;
