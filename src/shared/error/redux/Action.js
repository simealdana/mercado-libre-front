export const ERROR_ON = 'ERROR_ON';
export const ERROR_OFF = 'ERROR_OFF';
export const SET_MESSAGE_ERROR = 'SET_MESSAGE_ERROR';
export function errorOn() {
	return dispatch => {
		dispatch({ type: ERROR_ON });
	};
}

export function errorOff() {
	return dispatch => {
		dispatch({ type: ERROR_OFF });
	};
}

export function setMessageError(errorMessage) {
	return dispatch => {
		dispatch({ type: SET_MESSAGE_ERROR,payload:errorMessage });
	};
}