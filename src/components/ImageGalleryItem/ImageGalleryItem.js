import React from 'react';
import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image, onClickOpenModal, getBigImgLink }) => {
    const { previewURL, type, largeImageURL } = image;
    return (
        <li className={s.ImageGalleryItem} onClick={() => onClickOpenModal()}>
            <img
                src={previewURL}
                alt={type}
                className={s.ImageGalleryItemImage}
                onClick={() => getBigImgLink(largeImageURL, type)}
            />
        </li>
    );
};

ImageGalleryItem.propTypes = {
    image: PropTypes.PropTypes.shape({
        previewURL: PropTypes.string,
        type: PropTypes.string,
        largeImageURL: PropTypes.string,
    }).isRequired,
    onClickOpenModal: PropTypes.func.isRequired,
    getBigImgLink: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
