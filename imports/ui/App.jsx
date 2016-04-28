import React, {Component} from 'react'
import {Link} from 'react-router'

export default class App extends Component {
    render(){
        return (
            <div className='ui basic segment'>
                <div className='ui menu'>
                    <Link className='item' to='/entidade'>Entidades</Link>
                    <Link className='item' to='/entidade/new'>Cadastrar Entidade</Link>
                </div>

                {this.props.children}
            </div>
        )
    }
}
