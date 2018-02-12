import { combineReducers } from 'redux';
import ImgReducer from './reducer_imgs';
import VideosReducer from './reducer_videos';


const rootReducer = combineReducers({
	images: ImgReducer,
	videos: VideosReducer

});

export default rootReducer;
