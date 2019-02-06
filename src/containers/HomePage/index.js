import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import {
    makeSelectLoading,
    makeSelectError,
    makeSelectItemsView,
    makeSelectView
} from '../../store/selectors';
import {
    loadItemsData,
    changeView
} from '../../store/actions';
import HomePage from './HomePage';

const mapDispatchToProps = (dispatch) => ({
    loadItemsData: (evt) => {
        if (evt !== undefined && evt.preventDefault) evt.preventDefault();
        dispatch(loadItemsData());
    },
    changeItemsView: (view) => {
        dispatch(changeView(view));
    }
});

const mapStateToProps = createStructuredSelector({
    view: makeSelectView(),
    items: makeSelectItemsView(),
    loading: makeSelectLoading(),
    error: makeSelectError()
});

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps
);

export default compose(
    withConnect
)(HomePage);
export { mapDispatchToProps };