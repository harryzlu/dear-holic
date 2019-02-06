import { createStore, applyMiddleware, compose } from 'redux';
import createReducer from './reducers';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';

export const history = createBrowserHistory();

export default function configureStore(initialState = {}) {
    const middlewares = [
        thunk,
        routerMiddleware(history),
    ];

    const enhancers = [
        applyMiddleware(...middlewares),
    ];

    // If Redux DevTools Extension is installed use it, otherwise use Redux compose
    /* eslint-disable no-underscore-dangle */
    const composeEnhancers =
        process.env.NODE_ENV !== 'production' &&
        typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // TODO Try to remove when `react-router-redux` is out of beta, LOCATION_CHANGE should not be fired more than once after hot reloading
            // Prevent recomputing reducers for `replaceReducer`
            shouldHotReload: false,
        })
        : compose;
    /* eslint-enable */

    const store = createStore(
        createReducer(history),
        initialState,
        composeEnhancers(...enhancers)
    );

    return store;
}