import IMG_SELECTED from '../actions';

export default function(state = [], action){
	switch (action.type) {
		case IMG_SELECTED:
			return action.payload;
		default: 
			return state;
	}
}