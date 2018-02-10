import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './navigation-bar/navbar';
import { Route } from 'react-router-dom';
import PhotoGallery from './photo-gallery/photo_gallery';

// export const itemList = ['Home','Photo', 'Video', 'Blog'];

export class AsPerson extends Component {

	render() {
		return (
			<div>
				<NavBar />
			</div>
		);
	}
}

export class AppIndex extends Component {
	render() {
		return (
			<div className="index-card abs-center">
				<div className="index-card-title">
					Know Shuai as...
				</div>
				<div className="index-card-options">
					<Link to={'/person'}>a Person</Link>
					<h2>|</h2>
					<Link to={'/Programmer'}>a Programmer</Link>
				</div>

			</div>
		);
	}
}

export class AsProgrammer extends Component {
	render() {
		return (
			<div>As a Programmer</div>
		);
	}
}