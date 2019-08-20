import React, {Component} from 'react'
import LoginView from '../login/index'

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
                {estaLogeado?
                    <p>Logeado</p>:
                    <LoginView 
                        estaLogeado={this.state.estaLogeado}
                        manejaLogeo={this.manejaLogeo.bind(this)} />
                } 
            </div>
        ) 
        
    }
}