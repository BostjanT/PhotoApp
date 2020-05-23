import React, { useState, useEffect } from 'react';

const Context = React.createContext();

function ContextProvider({ children }) {
	const [allPhotos, setAllPhotos] = useState([]);
	const [cartItems, setCartItems] = useState([]);
	const url =
		'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json';

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => setAllPhotos(data));
	}, []);

	// part 8 toggle isFavorite
	function toggleFavorite(id) {
		const updatePhotoArr = allPhotos.map((photo) => {
			if (photo.id === id) {
				/* 	console.log(id);
				console.log(!photo.isFavorite); */

				return {
					...photo,
					isFavorite: !photo.isFavorite
				};
			}
			return photo;
		});
		setAllPhotos(updatePhotoArr);
	}

	function addToCart(nextItem) {
		setCartItems((prevItems) => [...prevItems, nextItem]);
	}

	function removeFromCart(id) {
		setCartItems((prevItems) =>
			prevItems.filter((item) => item.id !== id)
		); 
	}

	function clearCart() {
		setCartItems([]);
	}

	return (
		<Context.Provider
			value={{
				allPhotos,
				toggleFavorite,
				addToCart,
				removeFromCart,
				cartItems,
				setCartItems,
				clearCart
			}}>
			{children}
		</Context.Provider>
	);
}

export { ContextProvider, Context };
