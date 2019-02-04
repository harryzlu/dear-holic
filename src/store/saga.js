/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_ITEMS } from './actions/types';
import { itemsLoaded, itemsLoadingError } from './actions';
import { getItems } from '../utils/airtable';

export function* loadItems() {
    try {
        const items = yield call(getItems);
        yield put(itemsLoaded(items));
    } catch (err) {
        yield put(itemsLoadingError(err));
    }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* itemsData() {
    // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
    // By using `takeLatest` only the result of the latest API call is applied.
    // It returns task descriptor (just like fork) so we can continue execution
    // It will be cancelled automatically on component unmount
    // yield takeLatest(LOAD_REPOS, getRepos);
    yield takeLatest(LOAD_ITEMS, loadItems);
}
