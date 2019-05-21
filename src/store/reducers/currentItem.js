import types from '../actions/types';

const initialState = {
    currentItem: null
};

function currentItemReducer(state = initialState, action) {
    switch (action.type) {
    case types.SELECT_ITEM:
        return {
            ...state,
            currentItem: action.data
        }
    case types.CLEAR_ITEM_VIEW:
        return {
            ...state,
            currentItem: null
        }
    default:
        return state;
    }
}

export default currentItemReducer;
