import { LOADING_ON, LOADING_OFF } from './Action';

const initialState = {
	loading: false,
	currentLoader: 0
};

function loader(state = initialState, action) {
	switch (action.type) {
	case LOADING_ON: {
		return {
			...state,
			loading: true,
			currentLoader: state.currentLoader + 1
		};
	}

	case LOADING_OFF: {
		const currentLoader = state.currentLoader - 1;
		const loading = currentLoader !== 0;

		return {
			...state,
			loading,
			currentLoader
		};
	}

	default:
		return state;
	}
}

export default loader;
