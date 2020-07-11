import React, {Component} from 'react';
import s from './SearchForm.module.css';

class SearchForm extends Component {

	render() {
		return (
			<form className={s.SearchForm}>
				<button type="submit" className={s.SearchFormButton}>
					<span className={s.SearchFormButtonLabel}>Search</span>
				</button>

				<input
				className={s.SearchFormInput}
				type="text"
				autoComplete="off"
				autoFocus
				placeholder="Search images and photos"
				/>
			</form>
		)
	};
};

export default SearchForm;