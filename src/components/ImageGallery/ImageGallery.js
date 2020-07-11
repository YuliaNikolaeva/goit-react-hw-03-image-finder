import React from 'react';
import s from './ImageGallery.module.css';
import { v4 as uuidv4 } from 'uuid';

import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ imgs }) => {
    return (
        <ul className={s.ImageGallery}>
            {imgs.map(img => (
                <ImageGalleryItem image={img} key={uuidv4()} />
            ))}
        </ul>
    );
};

export default ImageGallery;
