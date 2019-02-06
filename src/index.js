import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

import { Provider } from 'react-redux';
import configureStore, { history } from './store/configureStore';

const store = configureStore();

const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App history={history}/>
        </Provider>,
        appRoot
    );
}

const appRoot = document.getElementById('app');

if (!appRoot) {
    console.error("Missing React root");
} else {
    render();
}

if (module.hot) {
    module.hot.accept('./containers/App', () => {
        render();
    })
}