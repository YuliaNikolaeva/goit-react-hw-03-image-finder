import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './SearchForm.module.css';

class SearchForm extends Component {
    state = {
        query: '',
    };

    componentDidMount() {
        window.addEventListener('keydown', this.handleSubmitEnter);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleSubmitEnter);
    }

    handleChange = e => {
        this.setState({ query: e.currentTarget.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmitForm(this.state.query);
    };

    handleSubmitEnter = e => {
        if (e.code === 'Enter') {
            e.preventDefault();
            this.props.onSubmitForm(this.state.query);
        }
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

SearchForm.propTypes = {
    onSubmitForm: PropTypes.func.isRequired,
};

export default SearchForm;
