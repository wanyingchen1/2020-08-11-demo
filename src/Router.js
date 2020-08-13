import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Login from './page/login/index';
import Admin from './page/admin/index'



const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/admin" component={Admin}/>
            
        </Switch>
    </HashRouter>
);


export default BasicRoute;