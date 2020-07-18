import React from 'react';
import s from './ContainerCenterContent.module.css';

const ContainerCenterContent = ({ children }) => {
    return <div className={s.contentBox}>{children}</div>;
};

export default ContainerCenterContent;
