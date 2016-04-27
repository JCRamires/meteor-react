import React from 'react'

import {Router, Route, browserHistory, IndexRoute} from 'react-router'

import App from '../../ui/App.jsx'
import Dashboard from '../../ui/Dashboard.jsx'
import ViewEntidades from '../../ui/ViewEntidades.jsx'
import Entidade from '../../ui/Entidade.jsx'

export const renderRoutes = () => (
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Dashboard} />
            <Route path='entidade'>
                <IndexRoute component={ViewEntidades} />
                <Route path='new' component={Entidade} />
                <Route path=':id' component={Entidade} />
                <Route path=':id/edit' component={Entidade} />
            </Route>
        </Route>
    </Router>
)
