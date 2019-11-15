import { SAMPLE_REDUX_ACTION_TYPE } from './actionTypes';

export const sampleReduxAction = () => {
	return ({
		type: SAMPLE_REDUX_ACTION_TYPE,
		payload: "Sample state value.."
	})
}