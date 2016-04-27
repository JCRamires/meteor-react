import {Meteor} from 'meteor/meteor'
import React, {Component} from 'react'

import '../../api/collections.js'

export default class FormEntidade extends Component{
    constructor(props){
        super(props)
        this.state = {nome: '', endereco: ''}
    }

    handleSubmit(e){
        e.preventDefault()
        Meteor.call('entidade.insert', {
            nome: this.refs.entidadeNome.value,
            endereco: this.refs.entidadeEndereco.value
        })
    }

    render(){
        return (
            <form className='entidade-form' onSubmit={this.handleSubmit.bind(this)}>

                <input type='text' ref='entidadeNome' placeholder='Nome da entidade' />
                <input type='text' ref='entidadeEndereco' placeholder='Endereço da entidade' />

                <button type='submit'>Submit</button>
            </form>
        )
    }
}
