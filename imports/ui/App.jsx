import React, {Component} from 'react'
import {Link} from 'react-router'

export default class App extends Component {
    render(){
        return (
            <div>
                <h2>
                    <Link to='/entidade/new'>Cadastrar</Link>
                </h2>
                <h2>
                    <Link to='/entidade'>Ver todas</Link>
                </h2>
                {this.props.children}
            </div>
        )
    }
}
