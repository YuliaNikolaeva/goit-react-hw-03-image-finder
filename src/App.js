import React, { Component } from 'react';
import axios from 'axios';

import './App.module.css';

import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';

const API_KEY = '17236888-5707ed9d6621806b47edb9b46';
const URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent('blue roses');


export default class App extends Component {
	state = {
		images: [],
	}

	componentDidMount() {
		axios.get(URL,)
		.then(response => {
			this.setState({images: response.data.hits});
		});
	};


	render() {
		const {images} = this.state;

		return (
			<>
				<Searchbar />
				<ImageGallery images={images}/>
			</>
		);
	};
};