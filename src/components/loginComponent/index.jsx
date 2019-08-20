import React, { Component } from 'react'
import Mensajes from './mensajes'
import Titulo from './titulo'

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
            ]
        }
    }

    render(){
        const { mensajes } = this.state
        return (
            <Card>
                <Card.Header><Titulo /></Card.Header>
                <Card.Body></Card.Body>
                <Card.Footer><Mensajes mensajes={mensajes}/></Card.Footer>
            </Card>
        )
    }
}
