import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = e => {
        if (e.code === 'Escape') {
            this.props.onClose();
        }
    };

    handleBackDropClick = e => {
        if (e.target === e.currentTarget) {
            this.props.onClose();
        }
    };

    render() {
        return createPortal(
            <div className={s.Overlay} onClick={this.handleBackDropClick}>
                <div className={s.Modal}>
                    <img src={this.props.bigImage} alt={this.props.bigImgAlt} />
                </div>
            </div>,
            modalRoot,
        );
    }
}

Modal.defaultProps = {
    bigImage: 'Sorry, image not found',
    bigImgAlt: 'Sorry, image not found',
};

Modal.propTypes = {
    bigImage: PropTypes.string,
    bigImgAlt: PropTypes.string,
};

export default Modal;
