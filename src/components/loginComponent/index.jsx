/**
 * Autor: Luis Herrera
 * Componente: LoginComponent
 *  Estados: [
 *      mensajes: Lista de mensajes que serán desplegados. Contiene los datos
 *                datos que necesita el componente que lo utiliza.
 *      tieneMensajes: Booleano que indica si los mensajes se muestran o no.
 *  ]
 */

import React, { Component } from 'react'
import Mensajes from './mensajes'
import Titulo from './titulo'
import Formulario from './formulario'
import axios from 'axios'

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
    manejaMensajes(estado){
        this.setState({tieneMensajes: estado})
    }

    manejaRequest(formulario) {
        const iptUsuario = formulario.elements[0]
        const iptontrasenia = formulario.elements[1]
        axios.post(
            'https://reqres.in/api/login', 
            {
                "email": iptUsuario.value,
                "password": iptontrasenia.value
            })
            .then(res => {
                (res.data.token==="QpwL5tke4Pnpja7X4")?console.log("LOGEADO"):this.manejaMensajes(true)

            })
            .catch(err => {
                this.manejaMensajes(true)
            })
    }

    manejaClickIngresar(evento){
        this.manejaRequest( evento.target.parentElement )

    }

    render(){
        const { mensajes, tieneMensajes } = this.state
        return (
            <Card>
                <Card.Header><Titulo /></Card.Header>
                <Card.Body> <Formulario manejaClick={this.manejaClickIngresar.bind(this)} /> </Card.Body>
                <Card.Footer>
                    { tieneMensajes? <Mensajes mensajes={mensajes} /> : <div></div> }
                </Card.Footer>
            </Card>
        )
    }
}
