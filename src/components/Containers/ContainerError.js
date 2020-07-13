import React from 'react';
import s from './ContainerError.module.css';

const ContainerError = ({ text }) => {
    return <div className={s.errBox}>{text}</div>;
};

export default ContainerError;
