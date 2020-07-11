import React from 'react';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({image}) => {
	const {id, previewURL, type } = image;
	return (
		<li key={id} className={s.ImageGalleryItem}>
			<img src={previewURL} alt={type} className={s.ImageGalleryItemImage} />
		</li>
	);
};

export default ImageGalleryItem;