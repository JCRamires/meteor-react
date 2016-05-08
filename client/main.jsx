import {Meteor} from 'meteor/meteor'

import React from 'react'
import {render} from 'react-dom'

import {renderRoutes} from '/imports/startup/client/routes.jsx'

import '../imports/startup/accounts-config.js'

Meteor.startup(() => {
    render(renderRoutes(), document.getElementById('render-target'))
})
