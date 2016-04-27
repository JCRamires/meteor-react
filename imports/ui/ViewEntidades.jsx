import {Meteor} from 'meteor/meteor'

import React, {Component} from 'react'

import { createContainer } from 'meteor/react-meteor-data'

import {Entidades} from '../api/collections.js'

export default class ViewEntidade extends Component {
    renderEntidades(){
        return this.props.entidades.map((entidade) => {
            <EntidadeRow key={entidade._id} nome={entidade.nome} endereco={entidade.endereco} />
        })
    }

    render(){
        return (
            <div>
                {this.renderEntidades()}
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
