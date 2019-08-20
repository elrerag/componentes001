import React, {Component} from 'react'
import LoginComponent from '../loginComponent'

export default class BodySection extends Component {
    constructor(props){
        super(props)
        this.state = {
            estaLogeado: false,
        }
    }

    manejaLogeo(_estaLogeado){
        this.setState({estaLogeado: _estaLogeado})
    }

    render(){
        const {estaLogeado} = this.state
        return (
            <div>
                <LoginComponent />
            </div>
        ) 
        
    }
}