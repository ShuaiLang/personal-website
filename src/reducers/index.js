import { combineReducers } from 'redux';
import ImgReducer from './reducer_imgs';
import SelectImageReducer from './reducer_active_img';


const rootReducer = combineReducers({
	images: ImgReducer,
	selectImage: SelectImageReducer
});

export default rootReducer;
