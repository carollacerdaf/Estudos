import React, { Component, Fragment } from 'react'
 
import Loading from './Loading'
 
import { getDepartments } from '../services/api'
 
class Departments extends Component {
 
    getDepartments = async () => {
        const {showLoading, hideLoading} = this.props

        showLoading('Carregando Departamentos');
        
        const response = await getDepartments().then(response => {
            hideLoading()
            return response
        })
        console.log({ response })
    }
 
    render() {
        return (
            <Fragment>
                <button onClick={this.getDepartments}>Buscar departamentos</button>
            </Fragment>
        )
    }
}
 
export default Departments