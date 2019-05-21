import types from '../actions/types';

// The initial state of the App
const initialState = {
    view: 'wardrobe',
};

function viewReducer(state = initialState, action) {
    switch (action.type) {
    case types.CHANGE_VIEW:
        return {
            ...state,
            view: action.view,
        };
    default:
        return state;
    }
}

export default viewReducer;
