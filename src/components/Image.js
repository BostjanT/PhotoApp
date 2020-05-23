import React, { useState, useContext } from 'react';
import { Context } from '../Context';
import PropTypes from 'prop-types';

function Image({ className, img }) {
	const [hovered, setHovered] = useState(false);
	const {
		toggleFavorite,
		addToCart,
		removeFromCart,
		cartItems
	} = useContext(Context);

	/* 	console.log(hovered); */
	function heartIcon() {
		if (img.isFavorite === true) {
			return (
				<i
					className='ri-heart-fill favorite'
					onClick={() => toggleFavorite(img.id)}
				/>
			);
		} else if (hovered) {
			return (
				<i
					className='ri-heart-line favorite'
					onClick={() => toggleFavorite(img.id)}
				/>
			);
		}
	}

	function cartIcon() {
		const inCart = cartItems.find((item) => item.id === img.id);
		if (inCart) {
			return (
				<i
					className='ri-shopping-cart-fill cart'
					onClick={() => removeFromCart(img.id)}
				/>
			);
		} else if (hovered) {
			return (
				<i
					className='ri-add-circle-line cart'
					onClick={() => addToCart(img)}
				/>
			);
		}
	}

	return (
		<div
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			className={`${className} image-container`}>
			<img src={img.url} className='image-grid' alt='imageapp' />
			{heartIcon()} {cartIcon()}
		</div>
	);
}

Image.propTypes = {
	className: PropTypes.string,
	img: PropTypes.shape({
		id: PropTypes.string.isRequired,
		url: PropTypes.string.isRequired,
		isFavorite: PropTypes.bool
	})
};

export default Image;
