import { Meteor } from 'meteor/meteor';
import {check} from 'meteor/check'

import {Entidades} from '/imports/api/collections.js'
import '/imports/api/publications.js'

Meteor.startup(() => {
})

Meteor.methods({
    'entidade.insert'(values){
        check(values, {nome: String, endereco: String})

        Entidades.insert(
            {
                nome: values.nome,
                endereco: values.endereco
            }
        )
    }
})
