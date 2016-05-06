import React, {Component, PropTypes} from 'react'

export default class CPFInput extends Component{
    constructor(props){
        super(props)
        this.state = {
            documento: props.documento
        }
    }

    render(){
        return(
            <div className='field'>
                <label>CPF</label>
                <input className='input-cpf' name='documentoEntidade' type='text' placeholder='CPF da entidade'
                    value={this.state.documento} onChange={this.props.onDocumentoChange.bind(this)} />
            </div>
        )
    }
}

CPFInput.propTypes = {
    documento: PropTypes.string.isRequired,
    onDocumentoChange: PropTypes.func.isRequired
}
