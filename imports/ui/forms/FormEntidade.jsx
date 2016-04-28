import {Meteor} from 'meteor/meteor'
import React, {Component} from 'react'

import '../../api/collections.js'

import CNPJInput from '../inputs/CNPJInput.jsx'
import CPFInput from '../inputs/CPFInput.jsx'

export default class FormEntidade extends Component{
    constructor(props={}){
        super(props)
        this.state = {nome: '', endereco: '', tipo: 1, isLoading: false}
        if(props.id){
            this.state.isLoading = true
            this.initializeForm(props.id)
        }
    }

    componentDidMount(){
        this.updateForm()
    }

    componentDidUpdate(){
        this.updateForm()
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

    initializeForm(id){
        entidade = Meteor.call('entidade.find', id, (error, result) => {
            if(error){
                console.log('tratar erro')
            } else {
                this.setState({
                    id: result._id,
                    nome: result.nome,
                    endereco: result.endereco,
                    tipo: result.tipo,
                    documento: result.documento,
                    isLoading: false
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
                break
            case 2:
                return (
                    <CNPJInput ref='inputDocumento' documento={this.state.documento} />
                )
                break
        }
    }

    dimmerClass(){
        let isActive = false
        let classes = 'ui inverted dimmer '

        if(this.state.isLoading){
            classes = classes + 'active'
        } else {
            classes = classes + 'disabled'
        }

        return classes
    }

    render(){
        return (
            <div className='ui basic blurring segment'>
                <div className={this.dimmerClass()}>
                    <div className='ui loader' />
                </div>
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
                    <button class="ui button" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
