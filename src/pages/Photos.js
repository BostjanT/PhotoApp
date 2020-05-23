import React, { useContext } from 'react';

import { getClass } from '../utils';
import { Context } from '../Context';
import Image from '../components/Image';

function Photos() {
	const { allPhotos } = useContext(Context);
	const showPhotos = allPhotos.map((img, i) => (
		<Image key={img.id} img={img} className={getClass(i)} />
	));
	return (
		<main className='photos'>
			{/* <h1>Images go here</h1> */}
			{showPhotos}
		</main>
	);
}

export default Photos;
