import React, {Component} from 'react'

export default class CPFInput extends Component{
    render(){
        return(
            <div className='field'>
                <label>CPF</label>
                <input className='input-cpf' name='documentoEntidade' type='text' placeholder='CPF da entidade' />
            </div>
        )
    }
}
