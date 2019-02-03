import React from 'react';
import { Switch, Route } from 'react-router-dom';

export default () => (
    <Switch>
        <Route exact path="/" component={() => (<div>HOME</div>)} />
        <Route path="/entry" component={() => (<div>ENTRY</div>)} />
        <Route component={() => <div>NOT FOUND</div>} />
    </Switch>
)