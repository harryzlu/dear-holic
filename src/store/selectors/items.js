import { createSelector } from 'reselect';
import _ from 'lodash';
import { getCurrentView } from './view';

export const selectItems = (state) => _.get(state, 'items');

export const getAllItems = createSelector(
    selectItems,
    (itemsState) => _.get(itemsState, 'items') || []
)

export const getItemsView = createSelector(
    getCurrentView,
    getAllItems,
    (currentView, allItems) => {
        if (currentView === 'all') {
            return allItems;
        }
        return allItems.filter((item) => item.fields.Collection === currentView);
    }
);

export const getIsItemsLoading = createSelector(
    selectItems,
    (itemsState) => _.get(itemsState, 'loading')
);

export const getItemsError = createSelector(
    selectItems,
    (itemsState) => _.get(itemsState, 'error')
);