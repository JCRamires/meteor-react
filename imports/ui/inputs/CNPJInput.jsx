import React, {Component, PropTypes} from 'react'

export default class CNPJInput extends Component{
    constructor(props){
        super(props)
        this.state = {
            documento: props.documento
        }
    }

    render(){
        return(
            <div className='field'>
                <label>CNPJ</label>
                <input className='input-cnpj' name='documentoEntidade' type='text' placeholder='CNPJ da entidade'
                    value={this.state.documento} onChange={this.props.onDocumentoChange.bind(this)} />
            </div>
        )
    }
}

CNPJInput.propTypes = {
    documento: PropTypes.string.isRequired,
    onDocumentoChange: PropTypes.func.isRequired
}
