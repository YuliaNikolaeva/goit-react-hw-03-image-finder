import React from 'react';
import s from './ImageGallery.module.css';

import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({images}) => {
	return (
		<ul className={s.ImageGallery}>
			{images.map((image) => (<ImageGalleryItem image={image}/>))}
		</ul>
	);
};

export default ImageGallery;