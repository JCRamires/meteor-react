import { Meteor } from 'meteor/meteor';
import {check} from 'meteor/check'

import {Entidades} from '/imports/api/collections.js'
import '/imports/api/publications.js'

Meteor.startup(() => {
    Entidades._ensureIndex({documento: 1}, {unique: 1})
})

Meteor.methods({
    'entidade.insert'(values){
        console.log(values)
        check(values, {nome: String, endereco: String, tipo: Number, documento: String})

        Entidades.insert(
            {
                nome: values.nome,
                endereco: values.endereco,
                tipo: values.tipo,
                documento: values.documento
            }
        )
    }
})
