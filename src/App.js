import React, { Component } from 'react';
import axios from 'axios';

import './App.module.css';

import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import imgApi from './services/imgApi';

const key = '17236888-5707ed9d6621806b47edb9b46';

export default class App extends Component {
    state = {
        images: [],
        currentPage: 1,
        searchQery: '',
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.searchQery !== this.state.searchQery) {
            this.fatchImages();
        }
    }

    onChangeQuery = query => {
        this.setState({
            searchQery: query,
            currentPage: 1,
            images: [],
        });
    };

    fatchImages = () => {
        const { currentPage, searchQery } = this.state;
        axios
            .get(
                `https://pixabay.com/api/?key=${key}&q=${searchQery}&per_page=3&page=${currentPage}`,
            )
            .then(response => {
                this.setState(prevState => ({
                    images: [...prevState.images, ...response.data.hits],
                    currentPage: prevState.currentPage + 1,
                }));
            });
    };

    render() {
        const { images } = this.state;

        return (
            <>
                <Searchbar onSubmit={this.onChangeQuery} />
                <ImageGallery imgs={images} />
                <Button onClick={this.fatchImages} />
            </>
        );
    }
}
