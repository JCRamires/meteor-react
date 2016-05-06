import {Meteor} from 'meteor/meteor'
import React, {Component, PropTypes} from 'react'

import { createContainer } from 'meteor/react-meteor-data'

import {Entidades} from '../../api/collections.js'

import CNPJInput from '../inputs/CNPJInput.jsx'
import CPFInput from '../inputs/CPFInput.jsx'

export default class FormEntidade extends Component{
    constructor(props={}){
        super(props)
        if(props.entidade){
            this.state = {
                nome: props.entidade.nome,
                endereco: props.entidade.endereco,
                tipo: props.entidade.tipo,
                documento: props.entidade.documento
            }
        } else {
            this.state = {nome: '', endereco: '', tipo: 1, documento: ''}
        }

    }

    componentDidMount(){
        this.updateForm()
    }

    componentDidUpdate(){
        this.updateForm()
    }

    updateFormValues(props){
        this.setState({
            id: props.entidade._id,
            nome: props.entidade.nome,
            endereco: props.entidade.endereco,
            tipo: props.entidade.tipo,
            documento: props.entidade.documento
        })
    }

    componentWillReceiveProps(props){
        this.updateFormValues(props)
    }

    updateForm(){
        $('.entidade-form').form({
            inline: true,
            fields:{
                name:{
                    identifier: 'nomeEntidade',
                    rules: [{
                        type: 'empty',
                        prompt: 'Digite o nome'
                    }]
                },
                endereco:{
                    identifier: 'enderecoEntidade',
                    rules: [{
                        type: 'empty',
                        prompt: 'Digite o endereço'
                    }]
                },
                documento: {
                    identifier: 'documentoEntidade',
                    rules: [{
                        type: 'empty',
                        prompt: 'Digite o documento'
                    }]
                }
            },
            onSuccess: (event, fields) => {
                Meteor.call('entidade.insert', {
                    nome: fields.nomeEntidade,
                    endereco: fields.enderecoEntidade,
                    tipo: Number.parseInt(fields.tipoEntidade),
                    documento: fields.documentoEntidade
                })
            }
        })
    }

    onNomeChange(e){
        this.setState({
            nome: e.currentTarget.value
        })
    }

    onEnderecoChange(e){
        this.setState({
            endereco: e.currentTarget.value
        })
    }

    onTipoChanged(e){
        this.setState({
            tipo: Number.parseInt(e.currentTarget.value)
        })
    }

    handleSubmit(e){
        e.preventDefault()
    }

    getInputDocumento(){
        let tipo = Number.parseInt(this.state.tipo)
        switch (tipo) {
        case 1:
            return (
                <CPFInput ref='inputDocumento' documento={this.state.documento} />
            )
        case 2:
            return (
                <CNPJInput ref='inputDocumento' documento={this.state.documento} />
            )
        }
    }

    render(){
        return (
            <div className='ui basic segment'>
                <form className='entidade-form ui form' onSubmit={this.handleSubmit.bind(this)}>
                    <div className='field'>
                        <label>Nome</label>
                        <input type='text' name='nomeEntidade' placeholder='Nome da entidade' onChange={this.onNomeChange.bind(this)} value={this.state.nome} />
                    </div>
                    <div className='field'>
                        <label>Endereço</label>
                        <input type='text' name='enderecoEntidade' placeholder='Endereço da entidade' onChange={this.onEnderecoChange.bind(this)} value={this.state.endereco} />
                    </div>
                    <div className='inline fields'>
                        <label>Tipo</label>
                        <div className='field'>
                            <div className='ui radio checkbox'>
                                <input type='radio' name='tipoEntidade' value='1' onChange={this.onTipoChanged.bind(this)} checked={this.state.tipo === 1} />
                                <label>Físico</label>
                            </div>
                            <div className='ui radio checkbox'>
                                <input type='radio' name='tipoEntidade' value='2' onChange={this.onTipoChanged.bind(this)} checked={this.state.tipo === 2} />
                                <label>Jurídico</label>
                            </div>
                        </div>
                    </div>
                    {this.getInputDocumento()}
                    <button className="ui button" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

FormEntidade.propTypes = {
    id: PropTypes.string,
    entidade: PropTypes.object
}

export default createContainer((props) => {
    if(props.id){
        Meteor.subscribe('entidades')
        return {
            entidade: Entidades.findOne({_id: props.id})
        }
    }

    return {
        entidade: undefined
    }
}, FormEntidade)
