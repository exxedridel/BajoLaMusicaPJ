import React, { useRef } from 'react';
import { Link } from "react-router-dom";
import '../styles/Login.scss';
// import logo from "@logos/logo_bajo_musica.png";

const Login = () => {
	const form = useRef(null);

	const handleSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData(form.current);
		const data = {
			usename: formData.get('email'),
			password: formData.get('password')
		}
		console.log(data);
	}

	return (
		<div className="Login">
			<div className="Login-container">
				{/* <img src={logo} alt="logo" className="login-logo" /> */}
				<form action="/" className="form" ref={form}>
					<label htmlFor="email" className="label">Email address</label>
					<input type="text" name="email" placeholder="Ingresa tu correo" className="input input-email" />
					<label htmlFor="password" className="label">Password</label>
					<input type="password" name="password" placeholder="Ingresa tu contraseña" className="input input-password" />
					<button
						onClick={handleSubmit}
						className="primary-button login-button">
						Log in
					</button>
					<Link to="/password-recovery">Forgot my password</Link>
				</form>
				 <Link to="/signup"> 
				<button 
					className="secondary-button signup-button">
					Sign up
				</button>
				</Link>
			</div>
		</div>
	);
}

export default Login;
