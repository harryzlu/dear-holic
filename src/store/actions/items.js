import types from './types';
import { getItems } from '../../utils/airtable';

export function loadItems() {
    return {
        type: types.LOAD_ITEMS,
    };
}

export function itemsLoaded(items) {
    return {
        type: types.LOAD_ITEMS_SUCCESS,
        items,
    };
}

export function itemsLoadingError(error) {
    return {
        type: types.LOAD_ITEMS_ERROR,
        error,
    };
}

export function loadItemsData() {
    return (dispatch) => {
        dispatch(loadItems());
        getItems()
        .then((items) => {
            dispatch(itemsLoaded(items))
        })
        .catch((err) => {
            dispatch(itemsLoadingError(err));
        });
    }
}