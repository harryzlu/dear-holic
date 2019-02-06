/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import types from '../actions/types';

// The initial state of the App
const initialState = {
    loading: false,
    error: false,
    items: [],
    view: 'wardrobe',
};

function globalReducer(state = initialState, action) {
    switch (action.type) {
    case types.LOAD_ITEMS:
        return {
            ...state,
            loading: true,
            error: false,
            items: [],
        };
    case types.LOAD_ITEMS_SUCCESS:
        return {
            ...state,
            items: action.items,
            loading: false,
        };
    case types.LOAD_ITEMS_ERROR:
        return {
            ...state,
            error: action.error,
            loading: false,
        };
    case types.CHANGE_VIEW:
        return {
            ...state,
            view: action.view,
        };
    default:
        return state;
    }
}

export default globalReducer;
