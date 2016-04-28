import {Meteor} from 'meteor/meteor'

import React, {Component} from 'react'

import { createContainer } from 'meteor/react-meteor-data'

import {Entidades} from '../api/collections.js'

import EntidadeRow from '../ui/EntidadeRow.jsx'

export default class ViewEntidade extends Component {
    renderEntidades(){
        return this.props.entidades.map((entidade) => (
            <EntidadeRow key={entidade._id} nome={entidade.nome} endereco={entidade.endereco} tipo={entidade.tipo} documento={entidade.documento} />
        ))
    }

    render(){
        return (
            <div className='ui grid'>
                <div className='row'>
                    <div className='column'>
                        {this.renderEntidades()}
                    </div>
                </div>
            </div>
        )
    }
}

export default createContainer(() => {
    Meteor.subscribe('entidades')

    return {
        entidades: Entidades.find({}).fetch()
    }
}, ViewEntidade)
