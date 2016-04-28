import React, {Component} from 'react'

export default class CNPJInput extends Component{
    render(){
        return(
            <div className='field'>
                <label>CNPJ</label>
                <input className='input-cnpj' name='documentoEntidade' type='text' placeholder='CNPJ da entidade'/>
            </div>
        )
    }
}
