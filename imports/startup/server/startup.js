import {Meteor} from 'meteor/meteor'

import '/imports/api/publications.js'

import '../../api/entidade.methods.js'

import {Entidades} from '../../api/collections.js'

Meteor.startup(() => {
    Entidades._ensureIndex({documento: 1}, {unique: 1})
})
