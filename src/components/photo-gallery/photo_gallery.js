import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from '../navigation-bar/navbar';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import { selectImage } from '../../actions';

class PhotoGallery extends Component {
	constructor() {
		super();
		this.state = { currentImage: 0 };
		this.closeLightbox = this.closeLightbox.bind(this);
		this.openLightbox = this.openLightbox.bind(this);
		this.gotoNext = this.gotoNext.bind(this);
		this.gotoPrevious = this.gotoPrevious.bind(this);
	}
	openLightbox(event, obj) {
		this.setState({
			currentImage: obj.index,
			lightboxIsOpen: true,
		});
	}
	closeLightbox() {
		this.setState({
			currentImage: 0,
			lightboxIsOpen: false,
		});
	}
	gotoPrevious() {
		this.setState({
			currentImage: this.state.currentImage - 1,
		});
	}
	gotoNext() {
		this.setState({
			currentImage: this.state.currentImage + 1,
		});
	}

	render() {
		return (
			<div>
				<NavBar />
				<Gallery photos={this.props.images}  onClick={this.openLightbox} />
				<Lightbox images={this.props.images}
					onClose={this.closeLightbox}
					onClickPrev={this.gotoPrevious}
					onClickNext={this.gotoNext}
					currentImage={this.state.currentImage}
					isOpen={this.state.lightboxIsOpen}
				/>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { images: state.images };
}
export default connect(mapStateToProps,{ selectImage })(PhotoGallery);