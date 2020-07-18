import React from 'react';
import PropTypes from 'prop-types';
import s from './ImageGallery.module.css';

import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ imgs, onClickOpenModal, getBigImgLink }) => {
    return (
        <ul className={s.ImageGallery}>
            {imgs.map(img => (
                <ImageGalleryItem
                    image={img}
                    key={img.id}
                    onClickOpenModal={onClickOpenModal}
                    getBigImgLink={getBigImgLink}
                />
            ))}
        </ul>
    );
};

ImageGallery.propTypes = {
    imgs: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        }),
    ),
};

export default ImageGallery;
