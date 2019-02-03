import React from 'react';
import { Helmet } from 'react-helmet';
import { ConnectedRouter } from 'connected-react-router';
import Routes from '../../routes';

export default (props) => (
    <ConnectedRouter history={props.history}>
        <div className="app-wrapper">
            <Helmet>
                <title>dear holic</title>
                <meta name="description" content="A place to put your floof" />
            </Helmet>
            <Routes />
        </div>
    </ConnectedRouter>
);