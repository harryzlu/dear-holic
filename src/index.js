import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/container/App';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from './store/configureStore';

const appRoot = document.getElementById('app');

if (!appRoot) {
    console.error("Missing React root");
} else {
    const store = configureStore();

    ReactDOM.render(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <App />
            </ConnectedRouter>
        </Provider>,
        appRoot
    );
}