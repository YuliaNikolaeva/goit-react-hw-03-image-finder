import React, { Component } from 'react';
import Loader from 'react-loader-spinner';

import './App.module.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import ContainerBtn from './components/Containers/ContainerBtn';
import ContainerError from './components/Containers/ContainerError';
import ContainerCenterContent from './components/Containers/ContainerCenterContent';

import Button from './components/Button';
import imgApi from './services/imgApi';
import ImageGallery from './components/ImageGallery';
import Searchbar from './components/Searchbar';
import Modal from './components/Modal';

export default class App extends Component {
    state = {
        images: [],
        currentPage: 1,
        searchQuery: '',
        isLoading: false,
        showModal: false,
        error: null,
        bigImgUrl: null,
        bigImgAlt: null,
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.searchQuery !== this.state.searchQuery) {
            this.fetchImages();
        }
    }

    onChangeQuery = query => {
        this.setState({
            searchQuery: query,
            currentPage: 1,
            images: [],
            error: null,
            bigImgUrl: null,
            bigImgAlt: null,
        });
    };

    fetchImages = () => {
        const { currentPage, searchQuery } = this.state;
        const options = {
            currentPage,
            searchQuery,
        };

        this.setState({ isLoading: true });

        imgApi
            .fetchImages(options)
            .then(images => {
                this.setState(prevState => ({
                    images: [...prevState.images, ...images],
                    currentPage: prevState.currentPage + 1,
                }));

                window.scrollTo({
                    top: document.documentElement.scrollHeight,
                    behavior: 'smooth',
                });
            })
            .catch(error => this.setState({ error }))
            .finally(() => this.setState({ isLoading: false }));
    };

    toggleModal = e => {
        this.setState(({ showModal }) => ({
            showModal: !showModal,
        }));
    };

    getBigImgLink = (bigImgLink, type) => {
        this.setState({
            bigImgUrl: bigImgLink,
            bigImgAlt: type,
        });
    };

    render() {
        const {
            images,
            isLoading,
            showModal,
            error,
            bigImgUrl,
            bigImgAlt,
        } = this.state;
        const shouldRenderButton = images.length > 0 && !isLoading;
        return (
            <>
                {showModal && (
                    <Modal
                        onClose={this.toggleModal}
                        images={images}
                        bigImage={bigImgUrl}
                        bigImgAlt={bigImgAlt}
                    />
                )}

                {error && <ContainerError text={`Sorry, ${error}`} />}

                <Searchbar onSubmit={this.onChangeQuery} />

                <ImageGallery
                    imgs={images}
                    onClickOpenModal={this.toggleModal}
                    getBigImgLink={this.getBigImgLink}
                />

                {isLoading && (
                    <ContainerCenterContent>
                        <Loader
                            type="Oval"
                            color="#00BFFF"
                            height={60}
                            width={60}
                        />
                    </ContainerCenterContent>
                )}

                {shouldRenderButton && (
                    <ContainerBtn>
                        <Button text={'Load more'} onClick={this.fetchImages} />
                    </ContainerBtn>
                )}
            </>
        );
    }
}
