import {SAMPLE_REDUX_ACTION_TYPE} from './actionTypes';

const initialState = {
	value: ''
};

export const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case SAMPLE_REDUX_ACTION_TYPE: {
			return {...state, value: action.payload}
		}
		default: {
			return state
		}
	}
}