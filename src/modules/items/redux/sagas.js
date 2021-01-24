// @ts-nocheck
import {
	takeEvery, call, put, fork
} from 'redux-saga/effects';
import * as actions from './actions';
import {getItems,getItem} from './api';

function* getItemsSagas({payload}) {
    const{query}= payload;
    const queryGetItems = () => getItems(query);
	try {
        const results = yield call(queryGetItems);
        const {items} = results;
        yield put(
            actions.setItemsAction(items)
        );
	} catch (error) {
		console.log(error);
	}
}

function* getItemSagas({payload}) {
    const{id}= payload;
    const queryGetItem = () => getItem(id);
	try {
        const results = yield call(queryGetItem);
        const {item} = results;
        yield put(
            actions.setItemAction(item)
        );
	} catch (error) {
		console.log(error);
	}
}

function* watchGetItems() {
	yield takeEvery(actions.Types.GET_ITEMS, getItemsSagas);
}

function* watchGetItem() {
	yield takeEvery(actions.Types.GET_ITEM, getItemSagas);
}

const itemsSagas = [
    fork(watchGetItems),
    fork(watchGetItem)
];

export default itemsSagas;
