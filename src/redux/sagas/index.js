import { all } from 'redux-saga/effects';
import itemsSagas from '../../modules/items/redux/sagas';

function* root() {
	yield all([
        ...itemsSagas
	]);
}

export default root;
