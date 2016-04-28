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
    'entidade.find'(id){
        check(id, String)
        return Entidades.findOne({_id: id})
    }
})
