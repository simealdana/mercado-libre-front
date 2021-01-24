import { combineReducers } from 'redux';
import itemsReducer from '../../modules/items/redux/reducer';
import loader from '../../shared/loader/redux/Reducer';
import ErrorReducer from '../../shared/error/redux/reducer';
export default combineReducers({
    itemsReducer,
    loader,
    ErrorReducer
});