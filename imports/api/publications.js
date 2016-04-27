import {Meteor} from 'meteor/meteor'

import {Entidades} from './collections.js'

if(Meteor.isServer){
    Meteor.publish('entidades', function () {
        return Entidades.find({})
    })
}
