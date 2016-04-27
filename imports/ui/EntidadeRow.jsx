import React, {Component, PropTypes} from 'react'

export default class EntidadeRow extends Component{
    render(){
        return (
            <div className='entidade-row'>
                {this.props.nome} <br />
                {this.props.endereco}
            </div>
        )
    }
}

EntidadeRow.propTypes = {
    nome: PropTypes.string.isRequired,
    endereco: PropTypes.string.isRequired
}
