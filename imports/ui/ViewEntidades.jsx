import {Meteor} from 'meteor/meteor'

import React, {Component} from 'react'

import { createContainer } from 'meteor/react-meteor-data'

import {Entidades} from '../api/collections.js'

export default class ViewEntidade extends Component {
    renderEntidades(){
        return this.props.entidades.map((entidade) => (
            <tr key='entidade._id'>
                <td>
                    {entidade.nome}
                </td>
                <td>
                    {entidade.endereco}
                </td>
                <td>
                    {entidade.tipo}
                </td>
                <td>
                    {entidade.documento}
                </td>
            </tr>
        ))
    }

    render(){
        return (
            <table className='ui celled table'>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Endereço</th>
                        <th>Tipo</th>
                        <th>Documento</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderEntidades()}
                </tbody>
            </table>
        )
    }
}

export default createContainer(() => {
    Meteor.subscribe('entidades')

    return {
        entidades: Entidades.find({}).fetch()
    }
}, ViewEntidade)
