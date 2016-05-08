import React from 'react'
import {FlowRouter} from 'meteor/kadira:flow-router'
import {mount} from 'react-mounter'

import App from '../../ui/App.jsx'
import Dashboard from '../../ui/Dashboard.jsx'
import PageNotFound from '../../ui/PageNotFound.jsx'
import ViewEntidades from '../../ui/ViewEntidades.jsx'
import Entidade from '../../ui/Entidade.jsx'

FlowRouter.route('/', {
    name: 'dashboard',
    action(){
        mount(App, {
            main: <Dashboard/>
        })
    }
})

FlowRouter.notFound = {
    name: 'pageNotFound',
    action: function() {
        mount(App, {
            main: <PageNotFound />
        })
    }
}

const entidadeRoutes = FlowRouter.group({
    prefix: '/entidade'
})

entidadeRoutes.route('/', {
    name: 'entidades',
    action: () => {
        mount(App, {
            main: <ViewEntidades />
        })
    }
})

entidadeRoutes.route('/new', {
    name: 'newEntidade',
    action: () => {
        mount(App, {
            main: <Entidade />
        })
    }
})

entidadeRoutes.route('/:id', {
    name: 'viewEntidade',
    action: (params) => {
        mount(App, {
            main: <Entidade id={params.id} />
        })
    }
})

entidadeRoutes.route('/:id/edit', {
    name: 'editEntidade',
    action: (params) => {
        mount(App, {
            main: <Entidade id={params.id} />
        })
    }
})