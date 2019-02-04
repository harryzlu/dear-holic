import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../containers/HomePage';

export default () => (
    <Switch>
        <Route exact path="/" component={() => (<HomePage />)} />
        <Route path="/entry" component={() => (<div>ENTRY</div>)} />
        <Route component={() => <div>NOT FOUND</div>} />
    </Switch>
)