import { ERROR_ON, ERROR_OFF ,SET_MESSAGE_ERROR} from './Action';

const initialState = {
	showError: false,
	errorMessage: ""
};

function ErrorReducer(state = initialState, action) {
	switch (action.type) {
	case ERROR_ON: {
		return {
			...state,
			showError: true,
		};
	}

	case ERROR_OFF: {
		return {
			...state,
			showError: false,
			errorMessage: ""
		};
    }
    
    case SET_MESSAGE_ERROR: {
		return {
			...state,
            errorMessage: action.payload,
		};
	}

	default:
		return state;
	}
}

export default ErrorReducer;
