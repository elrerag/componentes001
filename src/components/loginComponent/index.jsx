import React, { Component } from 'react'
import Mensajes from './mensajes'
import Titulo from './titulo'
import Formulario from './formulario'

import { Card } from 'react-bootstrap'


export default class LoginComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            mensajes: [
                {
                    'variant': 'danger',
                    'titulo': 'Ha ocurrido un problema',
                    'cuerpo': 'Las credenciales otorgadas, no son correctas.',
                }
            ],
            tieneMensajes: false
        }
    }

    manejaClick(evento){

    }

    render(){
        const { mensajes, tieneMensajes } = this.state
        return (
            <Card>
                <Card.Header><Titulo /></Card.Header>
                <Card.Body> <Formulario manejaClick={this.manejaClick.bind(this)} /> </Card.Body>
                <Card.Footer>
                    { tieneMensajes? <Mensajes mensajes={mensajes} /> : <div></div> }
                </Card.Footer>
            </Card>
        )
    }
}
