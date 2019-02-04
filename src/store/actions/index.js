import {
    LOAD_ITEMS,
    LOAD_ITEMS_SUCCESS,
    LOAD_ITEMS_ERROR,
    CHANGE_VIEW
} from './types';

/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_REPOS
 */
export function loadItems() {
    return {
        type: LOAD_ITEMS,
    };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} items The item data
 *
 * @return {object}      An action object with a type of LOAD_REPOS_SUCCESS passing the repos
 */
export function itemsLoaded(items) {
    return {
        type: LOAD_ITEMS_SUCCESS,
        items,
    };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function itemsLoadingError(error) {
    return {
        type: LOAD_ITEMS_ERROR,
        error,
    };
}

export function changeView(view) {
    return {
        type: CHANGE_VIEW,
        view,
    };
}
