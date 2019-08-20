import React, {useState} from 'react'
import Login from './login'

import { Card, Row, Col, Alert } from 'react-bootstrap'
import { MyCSSTransition } from './loginEffects'


const LoginView = ({manejaLogeo} ) => {
    const [muestraMensajeError, setMuestraMensajeError] = useState(false)
        return (
            <div>
                <Row>
                    <Col></Col>
                    <Col>
                        <Card>
                            <Card.Header>Ingreso al sistema</Card.Header>
                            <Card.Body>
                                <MyCSSTransition mostrarTransicion={muestraMensajeError}>
                                    <Alert 
                                        dismissible
                                        onClose={() => setMuestraMensajeError(false)}
                                        variant='danger'>Credenciales Inválidas</Alert> 
                                </MyCSSTransition>
                                <Login
                                    manejaMensajeError={setMuestraMensajeError}
                                    manejaLogeo={manejaLogeo} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col></Col>
                </Row>
            </div>
        )
    }

export default LoginView