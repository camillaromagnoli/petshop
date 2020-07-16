import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Petshop from './pages/Petshop';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Petshop} />
            </Switch>
        </BrowserRouter>
    )
}