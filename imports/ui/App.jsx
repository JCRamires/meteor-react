import React, {Component} from 'react'

import AccountsUIWrapper from './AccountsUIWrapper.jsx'

import {FlowRouter} from 'meteor/kadira:flow-router'

export default class AppContainer extends Component {
    render(){
        return (
            <div className='ui basic segment'>
                <div className='ui menu'>
                    <a className='item' href={FlowRouter.path('entidades')}>Entidades</a>
                    <a className='item' href={FlowRouter.path('newEntidade')}>Cadastrar Entidade</a>
                    <div className="item">
                        <AccountsUIWrapper />
                    </div>
                </div>

                {this.props.main}
            </div>
        )
    }
}
