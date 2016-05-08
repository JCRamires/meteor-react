import {Meteor} from 'meteor/meteor'

import {check} from 'meteor/check'

import {Entidades} from './collections.js'

Meteor.methods({
    'entidade.insert'(values){
        check(values, {nome: String, endereco: String, tipo: Number, documento: String})

        Entidades.insert(
            {
                nome: values.nome,
                endereco: values.endereco,
                tipo: values.tipo,
                documento: values.documento,
                owner: Meteor.userId()
            }
        )
    },
    'entidade.update'(values){
        check(values, {id: String, nome: String, endereco: String, tipo: Number, documento: String})

        Entidades.update({_id: values.id, owner: Meteor.userId()}, {
            nome: values.nome,
            endereco: values.endereco,
            tipo: values.tipo,
            documento: values.documento
        })
    },
    'entidade.remove'(id){
        check(id, String)

        Entidades.remove({_id: id, owner: Meteor.userId()})
    }
})
