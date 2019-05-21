/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import viewReducer from './view';
import itemsReducer from './items';
import currentItemReducer from './currentItem';

/**
 * Creates the main reducer with the dynamically injected ones
 */
export default function createReducer(history, injectedReducers) {
    return combineReducers({
        router: connectRouter(history),
        view: viewReducer,
        currentItem: currentItemReducer,
        items: itemsReducer,
        ...injectedReducers,
    });
}
