import React, {Component} from 'react'

export default class CPFInput extends Component{
    render(){
        return(
            <div>
                <div className='label'>CPF</div>
                <input className='input-cpf' ref='documento' type='text' /><br />
            </div>
        )
    }
}
