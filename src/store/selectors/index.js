/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = (state) => state.global;

const selectRoute = (state) => state.route;

const makeSelectLoading = () => createSelector(
    selectGlobal,
    (globalState) => globalState.loading
);

const makeSelectError = () => createSelector(
    selectGlobal,
    (globalState) => globalState.error
);

const makeSelectView = () => createSelector(
    selectGlobal,
    (globalState) => globalState.view
);

const makeSelectItemsView = () => createSelector(
    selectGlobal,
    makeSelectView(),
    (globalState, view) => {
        if (view === 'all') {
            return globalState.items;
        }
        return globalState.items.filter((item) => item.fields.Collection === view);
    }
);

const makeSelectLocation = () => createSelector(
    selectRoute,
    (routeState) => routeState.location.toJS()
);

export {
    selectGlobal,
    makeSelectLoading,
    makeSelectError,
    makeSelectView,
    makeSelectItemsView,
    makeSelectLocation,
};
