import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

import { Provider } from 'react-redux';
import configureStore, { history } from './store/configureStore';

const appRoot = document.getElementById('app');

if (!appRoot) {
    console.error("Missing React root");
} else {
    const store = configureStore();

    ReactDOM.render(
        <Provider store={store}>
            <App history={history}/>
        </Provider>,
        appRoot
    );
}