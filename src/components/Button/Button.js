import React from 'react';
import PropTypes from 'prop-types';
import s from './Button.module.css';

const Button = ({ text, onClick }) => {
    return (
        <button type="button" className={s.Button} onClick={onClick}>
            {text}
        </button>
    );
};

Button.defaultProps = {
    text: 'More',
};

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func.isRequired,
};

export default Button;
