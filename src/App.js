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
        searchQery: '',
        isLoading: false,
        showModal: false,
        error: null,
        bigImgUrl: null,
        bigImgAlt: null,
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
            bigImgUrl: null,
            bigImgAlt: null,
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

                window.scrollTo({
                    top: document.documentElement.scrollHeight,
                    behavior: 'smooth',
                });
            })
            .catch(error => this.setState({ error }))
            .finally(() => this.setState({ isLoading: false }));
    };

    toogleModal = e => {
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
                        onClose={this.toogleModal}
                        images={images}
                        bigImage={bigImgUrl}
                        bigImgAlt={bigImgAlt}
                    />
                )}

                {error && <ContainerError text={`Sorry, ${error}`} />}

                <Searchbar onSubmit={this.onChangeQuery} />

                <ImageGallery
                    imgs={images}
                    onClickOpenModal={this.toogleModal}
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
                        <Button text={'Load more'} onClick={this.fatchImages} />
                    </ContainerBtn>
                )}
            </>
        );
    }
}
