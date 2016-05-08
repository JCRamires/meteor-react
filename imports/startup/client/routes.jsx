import {Meteor} from 'meteor/meteor'

import React from 'react'

import {Router, Route, browserHistory, IndexRoute} from 'react-router'

import App from '../../ui/App.jsx'
import Dashboard from '../../ui/Dashboard.jsx'
import ViewEntidades from '../../ui/ViewEntidades.jsx'
import Entidade from '../../ui/Entidade.jsx'
import LoginPage from '../../ui/LoginPage.jsx'
import PageNotFound from '../../ui/PageNotFound.jsx'

function requireAuth(nextState, replace){
    if(!Meteor.userId()){
        replace('/login')
    }
}

export const renderRoutes = () => (
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Dashboard} />
            <Route path='login' component={LoginPage} />
            <Route path='entidade' onEnter={requireAuth}>
                <IndexRoute component={ViewEntidades} />
                <Route path='new' component={Entidade} />
                <Route path=':id' component={Entidade} />
                <Route path=':id/edit' component={Entidade} />
            </Route>
            <Route path='*' component={PageNotFound} />
        </Route>
    </Router>
)
