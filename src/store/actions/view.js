import types from './types';

export function changeView(view) {
    return {
        type: types.CHANGE_VIEW,
        view,
    };
}