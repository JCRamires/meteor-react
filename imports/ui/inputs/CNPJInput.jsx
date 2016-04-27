import React, {Component} from 'react'

export default class CNPJInput extends Component{
    render(){
        return(
            <div>
                <div className='label'>CNPJ</div>
                <input className='input-cnpj' ref='documento' type='text' /><br />
            </div>
        )
    }
}
