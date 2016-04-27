import {Meteor} from 'meteor/meteor'
import React, {Component} from 'react'

import '../../api/collections.js'

import CNPJInput from '../inputs/CNPJInput.jsx'
import CPFInput from '../inputs/CPFInput.jsx'

export default class FormEntidade extends Component{
    constructor(props){
        super(props)
        this.state = {nome: '', endereco: '', tipo: 1}
    }

    onTipoChanged(e){
        this.setState({
            tipo: Number.parseInt(e.currentTarget.value)
        })
    }

    handleSubmit(e){
        e.preventDefault()
        Meteor.call('entidade.insert', {
            nome: this.refs.entidadeNome.value,
            endereco: this.refs.entidadeEndereco.value,
            tipo: this.state.tipo,
            documento: this.refs.inputDocumento.refs.documento.value
        })
    }

    getInputDocumento(){
        let tipo = Number.parseInt(this.state.tipo)
        switch (tipo) {
            case 1:
                return (
                    <CPFInput ref='inputDocumento' />
                )
                break
            case 2:
                return (
                    <CNPJInput ref='inputDocumento' />
                )
                break
        }
    }

    render(){
        return (
            <form className='entidade-form' onSubmit={this.handleSubmit.bind(this)}>
                <div className='label-form'>Nome</div>
                <input type='text' ref='entidadeNome' placeholder='Nome da entidade' /><br />
                <br />
                <div className='label-form'>Endereço</div>
                <input type='text' ref='entidadeEndereco' placeholder='Endereço da entidade' /><br />
                <br />
                <div className='label-form'>Tipo</div>
                <input type='radio' name='tipo-entidade' value='1' onChange={this.onTipoChanged.bind(this)} checked={this.state.tipo === 1} />Físico<br />
                <input type='radio' name='tipo-entidade' value='2' onChange={this.onTipoChanged.bind(this)} checked={this.state.tipo === 2} />Jurídico<br />
                <br />
                {this.getInputDocumento()}
                <br />
                <button type='submit'>Submit</button>
            </form>
        )
    }
}
