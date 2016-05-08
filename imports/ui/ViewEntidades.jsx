import {Meteor} from 'meteor/meteor'

import React, {Component, PropTypes} from 'react'

import { createContainer } from 'meteor/react-meteor-data'

import {Entidades} from '../api/collections.js'

export default class ViewEntidade extends Component {
    renderEntidades(){
        return this.props.entidades.map((entidade) => (
            <tr key={entidade._id}>
                <td>{entidade.nome}</td>
                <td>{entidade.endereco}</td>
                <td>{entidade.tipo}</td>
                <td>{entidade.documento}</td>
                <td>
                    <a className='item'
                       href={FlowRouter.path('editEntidade', {id: entidade._id})}><i className='edit icon' /></a>
                    <i className="erase icon" onClick={this.removeEntidade.bind(this, entidade._id)}></i>
                </td>
            </tr>
        ))
    }

    removeEntidade(id){
        Meteor.call('entidade.remove', id)
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
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderEntidades()}
                </tbody>
            </table>
        )
    }
}

ViewEntidade.propTypes = {
    entidades: PropTypes.array.isRequired
}

export default createContainer(() => {
    Meteor.subscribe('entidades')

    return {
        entidades: Entidades.find({}).fetch()
    }
}, ViewEntidade)
