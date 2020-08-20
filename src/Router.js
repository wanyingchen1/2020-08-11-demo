import React from 'react';
import {HashRouter, Route, Router, Switch, Redirect} from 'react-router-dom';
import { createBrowserHistory } from 'history'
import Main from './page/main/index';
// import Admin from './page/admin/index'
import Game from './page/game/game'
import Login from './page/login/index'

const history = createBrowserHistory()


const BasicRoute = () => (
    
    <HashRouter>
        {/* <Router history={history}> */}
        <Switch>
            <Route path="/main" component={Main}/>
            <Route exact path="/login" component={Login}/>
            {/* <Route exact path="/admin" component={Admin}/> */}
            {/* <Route path='/game' component={Game}/> */}
            <Redirect from="/" to="/main" />
        </Switch>
         {/* </Router> */}
    </HashRouter>
   
);


export default BasicRoute;