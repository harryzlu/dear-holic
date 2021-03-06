import { connect } from 'react-redux';
import { compose } from 'redux';

import HomePage from './HomePage';

import { changeView } from '../../store/actions/view';
import { getCurrentView } from '../../store/selectors/view';

const mapDispatchToProps = (dispatch) => ({
    changeItemsView: (view) => {
        dispatch(changeView(view));
    }
});

const mapStateToProps = (state) => ({
    view: getCurrentView(state),
});

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps
);

export default compose(
    withConnect
)(HomePage);