import React, { Component } from 'react'
import { getUsers } from '../services/api'
import Loading from './Loading'

class Users extends Component {

    getUsers = async () => {
        const { showLoading, hideLoading } = this.props

        showLoading('Carregando Usuários')
        const response = await getUsers().then(response=>{
            hideLoading()
            return response;
        })
        console.log({ response }) 
    }
    
    render() {
        return ( 
            <button onClick={this.getUsers}>Buscar usuários</button>
        ) 
    } 
} 
 
export default Users