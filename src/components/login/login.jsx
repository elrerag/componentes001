import React, { Component } from 'react'

import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import { MyDotLoader } from './loginEffects'

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            validarFormulario: false,
            esperaCarga: false,
            data: {
                usuario: '',
                contrasenia: '',
            }
        }
    }

    usaEfecto(usuario, contrasenia){
        if(!this.state.esperaCarga) {
            const {manejaLogeo, manejaMensajeError} = this.props

            axios.post(
                'https://reqres.in/api/login', 
                {
                    "email": usuario.value,
                    "password": contrasenia.value
                })
                .then( () => {this.setState({esperaCarga: false})})
                .then(res => {
                    (res.data.token==="QpwL5tke4Pnpja7X4")?manejaLogeo(true):manejaMensajeError(true)

                })
                .catch(err => {
                    manejaMensajeError(true)
                    this.setState({esperaCarga: false})
                })
        }
    }

    handleClick(evt) {
        const formulario = evt.currentTarget.parentNode;
        const usuario = formulario.elements[0];
        const contrasenia = formulario.elements[1];

        const {validarFormulario, esperaCarga} = this.state

        if(!esperaCarga){
            this.setState({
                esperaCarga: true
            })
        }

        if(!validarFormulario) {
            this.setState({
                validarFormulario: true
            })

        }

        this.usaEfecto(usuario, contrasenia)

        if(formulario.checkValidity()){
            this.setState({
                data:{
                    usuario: usuario.value,
                    contrasenia: contrasenia.value
                }
            })

        }
    }

    render() {
        const {validarFormulario, esperaCarga} = this.state
        return (
            <Form noValidate validated={validarFormulario} >
                <Form.Group controlId="usuario">
                    <Form.Label>Usuario</Form.Label>
                    <Form.Control
                        required
                        pattern="[A-Za-z0-9@\.]{5,}"
                        type="text"
                        placeholder="ingrese el usuario" />
                    <Form.Text className="text-muted">* eve.holt@reqres.in</Form.Text>
                    <Form.Control.Feedback type="invalid">
                        Por favor ingrese un usuario válido
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="contrasenia">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        required
                        type="password"
                        placeholder="Ingrese su correo" />
                        <Form.Text className="text-muted">* cityslicka</Form.Text>
                    <Form.Control.Feedback type="invalid">
                        Por favor ingrese una contraseña
                    </Form.Control.Feedback>
                </Form.Group>
                {
                    esperaCarga?
                    <MyDotLoader />
                    :
                    <Button 
                    variant="primary" 
                    type="button" 
                    onClick={this.handleClick.bind(this)}>Ingresar</Button>
                    

                }

            </Form>

        )
    }


} 