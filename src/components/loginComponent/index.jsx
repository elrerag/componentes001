/**
 * Autor: Luis Herrera
 * Componente: LoginComponent
 *  Estados: [
 *      mensajes: Lista de mensajes que serán desplegados. Contiene los datos
 *                datos que necesita el componente que lo utiliza.
 *      tieneMensaje: Booleano que indica si los mensajes se muestran o no.
 *  ]
 */

import React, { Component } from 'react'
import Titulo from './titulo'
import Formulario from './formulario'
import axios from 'axios'

import { Card } from 'react-bootstrap'
import Mensaje from './mensaje';


export default class LoginComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            muestraMensaje: false,
            cargando: false
        }
    }

    manejaMuestraMensaje(estado){
        this.setState({muestraMensaje: estado})
    }

    manejaCargando(estado) {
        this.setState({cargando: estado})
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
            .then(() => this.manejaCargando(false))
            .then(res => {
                (res.data.token==="QpwL5tke4Pnpja7X4")?console.log("LOGEADO"):this.manejaMuestraMensaje(true)
            })
            .catch(err => {
                this.manejaMuestraMensaje(true)
                this.manejaCargando(false)
            })
    }

    manejaClickIngresar(evento){
        this.manejaCargando(true)
        this.manejaRequest( evento.target.parentElement )
    }

    render(){
        const { muestraMensaje, cargando } = this.state
        return (
            <Card>
                <Card.Header><Titulo /></Card.Header>
                <Card.Body> 
                    <Formulario 
                        estaCargando = {cargando}
                        manejaClick={this.manejaClickIngresar.bind(this)} /> 
                </Card.Body>
                <Card.Footer>
                    { 
                        <Mensaje 
                            muestraMensaje = {muestraMensaje}
                            manejaMuestraMensaje={this.manejaMuestraMensaje.bind(this)}/>
                    }
                </Card.Footer>
            </Card>
        )
    }
}
