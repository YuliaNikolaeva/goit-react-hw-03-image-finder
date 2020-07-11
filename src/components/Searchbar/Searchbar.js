import React from 'react';
import s from './Searchbar.module.css';

import SearchForm from '../SearchForm';

const Searchbar = ({ onSubmit }) => {
    return (
        <header className={s.Searchbar}>
            <SearchForm onSubmitForm={onSubmit} />
        </header>
    );
};

export default Searchbar;
