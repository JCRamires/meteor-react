import React, {Component, PropTypes} from 'react'

export default class EntidadeRow extends Component{
    render(){
        return (
            <div>
                Nome: {this.props.nome} Endereço: {this.props.endereco} Tipo: {this.props.tipo} Documento: {this.props.documento}
            </div>
        )
    }
}

EntidadeRow.propTypes = {
    nome: PropTypes.string.isRequired,
    endereco: PropTypes.string.isRequired,
    tipo: PropTypes.number.isRequired,
    documento: PropTypes.string.isRequired
}
