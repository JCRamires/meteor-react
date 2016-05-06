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
                documento: values.documento
            }
        )
    },
    'entidade.update'(values){
        check(values, {id: String, nome: String, endereco: String, tipo: Number, documento: String})

        Entidades.update({_id: values.id}, {
            nome: values.nome,
            endereco: values.endereco,
            tipo: values.tipo,
            documento: values.documento
        })
    }
})
