import { FETCH_WEATHER } from '../actions/index'

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_WEATHER:
			//return state.concat([ action.payload.data ]); // traditional way
			return [ action.payload.data, ...state ]; //ES6 way, create new array from a flattened existing array
	}
	return state;
}
