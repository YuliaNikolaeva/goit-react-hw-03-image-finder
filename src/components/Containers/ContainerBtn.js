import React from 'react';
import s from './ContainerBtn.module.css';

const ContainerBtn = ({ children }) => {
    return <div className={s.btnBox}>{children}</div>;
};

export default ContainerBtn;
