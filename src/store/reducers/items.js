import types from '../actions/types';

// The initial state of the App
const initialState = {
    loading: false,
    error: false,
    items: [],
};

function itemsReducer(state = initialState, action) {
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
            items: [],
        };
    default:
        return state;
    }
}

export default itemsReducer;
