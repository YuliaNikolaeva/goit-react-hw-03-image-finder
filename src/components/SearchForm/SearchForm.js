import React, { Component } from 'react';
import s from './SearchForm.module.css';

class SearchForm extends Component {
    state = {
        query: '',
    };

    handleChange = e => {
        this.setState({ query: e.currentTarget.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmitForm(this.state.query);
        this.setState({ query: '' });
    };

    render() {
        return (
            <form className={s.SearchForm} onSubmit={this.handleSubmit}>
                <button type="submit" className={s.SearchFormButton}>
                    <span className={s.SearchFormButtonLabel}>Search</span>
                </button>

                <input
                    className={s.SearchFormInput}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={this.state.query}
                    onChange={this.handleChange}
                />
            </form>
        );
    }
}

export default SearchForm;
