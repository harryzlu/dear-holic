import { createSelector } from 'reselect';
import _ from 'lodash';

export const selectView = (state) => _.get(state, 'view');

export const getCurrentView = createSelector(
    selectView,
    (viewState) => _.get(viewState, 'view')
);