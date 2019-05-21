import { createSelector } from 'reselect';
import _ from 'lodash';

export const selectCurrentItem = (state) => _.get(state, 'currentItem');

export const getCurrentItem = createSelector(
    selectCurrentItem,
    (currentItemState) => _.get(currentItemState, 'currentItem')
);