import React, { Component } from 'react';

import './App.module.css';

import ContainerBtn from './components/Containers/ContainerBtn';
import ContainerError from './components/Containers/ContainerError';

import Button from './components/Button';
import imgApi from './services/imgApi';
import ImageGallery from './components/ImageGallery';
import Searchbar from './components/Searchbar';
export default class App extends Component {
    state = {
        images: [],
        currentPage: 1,
        searchQery: '',
        isLoading: false,
        error: null,
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
            error: null,
        });
    };

    fatchImages = () => {
        const { currentPage, searchQery } = this.state;
        const options = {
            currentPage,
            searchQery,
        };

        this.setState({ isLoading: true });

        imgApi
            .fatchImages(options)
            .then(images => {
                this.setState(prevState => ({
                    images: [...prevState.images, ...images],
                    currentPage: prevState.currentPage + 1,
                }));
            })
            .catch(error => this.setState({ error }))
            .finally(() => this.setState({ isLoading: false }));
    };

    render() {
        const { images, isLoading, error } = this.state;
        const shouldRenderButton = images.length > 0 && !isLoading;

        return (
            <>
                {error && <ContainerError text={`Sorry, ${error}`} />}
                <Searchbar onSubmit={this.onChangeQuery} />
                <ImageGallery imgs={images} />
                {isLoading && <h2>Загружаем...</h2>}

                {shouldRenderButton && (
                    <ContainerBtn>
                        <Button onClick={this.fatchImages} />
                    </ContainerBtn>
                )}
            </>
        );
    }
}
