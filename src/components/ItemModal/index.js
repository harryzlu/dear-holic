import { connect } from 'react-redux';
import { compose } from 'redux';

import ItemModal from './ItemModal';

import { getCurrentItem } from '../../store/selectors/currentItem';
import { clearItemView } from '../../store/actions/currentItem';

const mapDispatchToProps = (dispatch) => ({
    clearItemView: () => { dispatch(clearItemView()); }
});

const mapStateToProps = (state) => ({
    currentItem: getCurrentItem(state)
});

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps
);

export default compose(
    withConnect
)(ItemModal);