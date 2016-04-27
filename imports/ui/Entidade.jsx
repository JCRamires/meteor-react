import React, {Component} from 'react'

import FormEntidade from './forms/FormEntidade.jsx'

export default class Entidade extends Component {
    renderForm(){
        return (
            <FormEntidade id={this.props.params.id}/>
        )
    }

    render(){
        return (
            <div>
                <h3>Cadastro de entidade</h3>
                <div>
                    {this.renderForm()}
                </div>
            </div>
        )
    }
}
