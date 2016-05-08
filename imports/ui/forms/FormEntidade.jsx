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
            this.state = this.getDefaultState()
        }

    }

    getDefaultState(){
        return {nome: '', endereco: '', tipo: 1, documento: ''}
    }

    componentDidMount(){
        this.initializeForm()
    }

    updateFormValues(props){
        if(props.entidade){
            this.setState({
                id: props.entidade._id,
                nome: props.entidade.nome,
                endereco: props.entidade.endereco,
                tipo: props.entidade.tipo,
                documento: props.entidade.documento
            })
        }
    }

    componentWillReceiveProps(props){
        this.updateFormValues(props)
    }

    initializeForm(){
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
                let formData = {
                    nome: fields.nomeEntidade,
                    endereco: fields.enderecoEntidade,
                    tipo: Number.parseInt(fields.tipoEntidade),
                    documento: fields.documentoEntidade
                }
                if(this.props.entidade){
                    formData.id = this.props.entidade._id
                    Meteor.call('entidade.update', formData)
                } else {
                    Meteor.call('entidade.insert', formData)
                }
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

    onDocumentoChange(e){
        this.setState({
            documento: e.currentTarget.value
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
                <CPFInput name='inputDocumento' documento={this.state.documento}
                    onDocumentoChange={this.onDocumentoChange} />
            )
        case 2:
            return (
                <CNPJInput name='inputDocumento' documento={this.state.documento}
                    onDocumentoChange={this.onDocumentoChange} />
            )
        }
    }

    render(){
        return (
            <div className='ui basic segment'>
                <form className='entidade-form ui form' onSubmit={this.handleSubmit.bind(this)}>
                    <div className='field'>
                        <label>Nome</label>
                        <input type='text' name='nomeEntidade' placeholder='Nome da entidade'
                            onChange={this.onNomeChange.bind(this)} value={this.state.nome} />
                    </div>
                    <div className='field'>
                        <label>Endereço</label>
                        <input type='text' name='enderecoEntidade' placeholder='Endereço da entidade'
                            onChange={this.onEnderecoChange.bind(this)} value={this.state.endereco} />
                    </div>
                    <div className='inline fields'>
                        <label>Tipo</label>
                        <div className='field'>
                            <div className='ui radio checkbox'>
                                <input type='radio' name='tipoEntidade' value='1'
                                    onChange={this.onTipoChanged.bind(this)} checked={this.state.tipo === 1} />
                                <label>Físico</label>
                            </div>
                            <div className='ui radio checkbox'>
                                <input type='radio' name='tipoEntidade' value='2'
                                    onChange={this.onTipoChanged.bind(this)} checked={this.state.tipo === 2} />
                                <label>Jurídico</label>
                            </div>
                        </div>
                    </div>
                    {this.getInputDocumento()}
                    <input type="submit" value="Submit" className="ui button" />
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
            entidade: Entidades.findOne({_id: props.id, owner: Meteor.userId()})
        }
    }

    return {
        entidade: undefined
    }
}, FormEntidade)
