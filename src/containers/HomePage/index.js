import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
    makeSelectLoading,
    makeSelectError,
    makeSelectItemsView,
    makeSelectView
} from 'containers/App/selectors';
import {
    loadItems,
    changeView
} from '../App/actions';
import reducer from './reducer';
import HomePage from './HomePage';

const mapDispatchToProps = (dispatch) => ({
    loadItemsData: (evt) => {
        if (evt !== undefined && evt.preventDefault) evt.preventDefault();
        dispatch(loadItems());
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

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
    withReducer,
    withSaga,
    withConnect
)(HomePage);
export { mapDispatchToProps };