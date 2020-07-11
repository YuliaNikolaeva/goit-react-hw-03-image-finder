import React from 'react';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image }) => {
    const { previewURL, type } = image;
    return (
        <li className={s.ImageGalleryItem}>
            <img
                src={previewURL}
                alt={type}
                className={s.ImageGalleryItemImage}
            />
        </li>
    );
};

export default ImageGalleryItem;
