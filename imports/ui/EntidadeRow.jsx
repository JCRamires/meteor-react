import React, {Component, PropTypes} from 'react'

export default class EntidadeRow extends Component{
    render(){
        return (
            <li>
                Nome: {this.props.nome} Endereço: {this.props.endereco}
            </li>
        )
    }
}

EntidadeRow.propTypes = {
    nome: PropTypes.string.isRequired,
    endereco: PropTypes.string.isRequired
}
