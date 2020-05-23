import React, { useState, useContext } from 'react';
import { Context } from '../Context';
import PropTypes from 'prop-types';

function CartItem({ item }) {
	const [hovered, setHovered] = useState(false);
	const { setCartItems } = useContext(Context);

	function removeCartItems(id) {
		setCartItems((prevItems) =>
			prevItems.filter((item) => item.id !== id)
		);
	}

	const changeClass =
		hovered ? 'fill' :
		'line';

	return (
		<div className='cart-item'>
			<i
				className={`ri-delete-bin-${changeClass}`}
				onClick={() => removeCartItems(item.id)}
				onMouseEnter={() => setHovered(true)}
				onMouseLeave={() => setHovered(false)}
			/>

			<img src={item.url} width='140px' alt='superphoto' />
			<p>9.99 €</p>
		</div>
	);
}

CartItem.propTypes = {
	item: PropTypes.shape({
		url: PropTypes.string.isRequired
	})
};

export default CartItem;
