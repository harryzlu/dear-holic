import { connect } from 'react-redux';
import { compose } from 'redux';

import ItemList from './ItemList';

import { loadItemsData } from '../../store/actions/items';
import { getItemsView, getIsItemsLoading, getItemsError } from '../../store/selectors/items';
import { selectItem } from '../../store/actions/currentItem';

const mapDispatchToProps = (dispatch) => ({
    loadItemsData: (e) => {
        if (e !== undefined && e.preventDefault) e.preventDefault();
        dispatch(loadItemsData());
    },
    viewItem: (itemData, e) => {
        if (e !== undefined && e.preventDefault) e.preventDefault();
        dispatch(selectItem(itemData));
    }
});

const mapStateToProps = (state) => ({
    items: getItemsView(state),
    isItemsLoading: getIsItemsLoading(state),
    itemsError: getItemsError(state)
});

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps
);

export default compose(
    withConnect
)(ItemList);