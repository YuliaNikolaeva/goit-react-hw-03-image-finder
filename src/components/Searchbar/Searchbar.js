import React, {Component} from 'react';
import s from './Searchbar.module.css';

import SearchForm from '../SearchForm';

class Searchbar extends Component {
	render () {
		return (
			<header className={s.Searchbar}>
				<SearchForm />
			</header>
		)
	};
};

export default Searchbar;