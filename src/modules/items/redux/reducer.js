import { Types } from './actions';

const INITIAL_STATE = {
	items: [],
	item: null,
};

export default function itemsReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
    case Types.SET_ITEMS: {
        return {
            ...state,
            items: action.payload.items ? action.payload.items :[]
        };
    }
    case Types.SET_ITEM: {
		return {
			...state,
			item: action.payload.item
		};
	}
	default: {
		return state;
	}
	}
}