export const LOADING_ON = 'LOADING_ON';
export const LOADING_OFF = 'LOADING_OFF';

export function loadingOn() {
	return dispatch => {
		dispatch({ type: LOADING_ON });
	};
}

export function loadingOff() {
	return dispatch => {
		dispatch({ type: LOADING_OFF });
	};
}
