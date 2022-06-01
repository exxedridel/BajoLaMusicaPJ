import React from 'react';
import '../styles/Order.scss';
import flechita from "../assets/icons/flechita.svg";

const Order = () => {
	return (
		<div className="Order">
			<p>
				<span>04.25.22</span>
				<span>3 articles</span>
			</p>
			<p>$960.00</p>
			<img src={flechita} alt="arrow" />
		</div>
	);
}

export default Order;
