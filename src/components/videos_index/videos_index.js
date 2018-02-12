import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import NavBar from '../navigation-bar/navbar';
import { getVideos } from '../../actions';


class VideoIndex extends Component {
	componentDidMount(){
		this.props.getVideos();
	}

	renderVideo() {

		return _.map(this.props.videos, (video) => {
			var url = `https://www.youtube.com/embed/${video.id}`;
			return (
				<div key={video.id} className="video-detail">
					<div className="embed-responsive embed-responsive-16by9">
						<iframe className="embed-responsive-item" src={url}></iframe>
					</div>
					<div className="details">
						<div>{video.snippet.title}</div>
					</div>
				</div>
			);
		}) 
					
}

	render() {
		return (
			<div>
				<NavBar />
				<div className="video-wrapper">
					<div className="video-container">
						{ this.renderVideo() }
					</div>
				</div>
			</div>
		);
	}
}

function mapPropsToState(state){
	// console.log('state.videos: ', state.videos);
	return { videos: state.videos };
}

export default connect(mapPropsToState, { getVideos })(VideoIndex);
