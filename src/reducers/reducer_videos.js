import _ from 'lodash';
import { FETCH_VIDEOS } from '../actions';

export default function(state={}, action) {
	switch (action.type) {
		case FETCH_VIDEOS:
			// console.log(action.payload);
			return _.mapKeys(action.payload, 'id');
			
		default: 
			return state;
	}
}