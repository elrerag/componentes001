import React, {Component} from 'react'

import { Form, Button } from 'react-bootstrap'


export class Formulario extends Component {
    constructor(props) {
        super(props)
        this.state = {
            validar: false
        }
    }

    preManejaClick(evento) {
        const { manejaClick } = this.props
        const { validar } = this.state
        manejaClick(evento)
        if(!validar){
            this.setState({validar: true})
        }
    }

    render(){
        const { validar } = this.state
        return(
            <Form noValidate validated={validar} >
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
    
                <Button 
                    variant="danger"  
                    type="button" 
                    onClick={ this.preManejaClick.bind(this) }>Ingresar</Button>
            </Form>
        )

    }
}

export default Formulario




