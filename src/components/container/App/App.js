import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router-dom';

export default (props) => (
    <ConnectedRouter history={props.history}>
        <div className="app-wrapper">
            <Helmet>
                <title>dear holic</title>
                <meta name="description" content="A place to put your floof" />
            </Helmet>
            <Switch>
                <Route exact path="/" component={() => (<div>HOME</div>)} />
                <Route path="/entry" component={() => (<div>ENTRY</div>)} />
                <Route component={() => <div>NOT FOUND</div>} />
            </Switch>
        </div>
    </ConnectedRouter>
);