/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import globalReducer from './global';

/**
 * Creates the main reducer with the dynamically injected ones
 */
export default function createReducer(history, injectedReducers) {
    return combineReducers({
        router: connectRouter(history),
        global: globalReducer,
        ...injectedReducers,
    });
}
