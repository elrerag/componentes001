import React from 'react'

import { Alert } from 'react-bootstrap'

const Mensaje = ({muestraMensaje, manejaMuestraMensaje}) => {

    return (
        <Alert
            show={muestraMensaje}
            onClose={() => manejaMuestraMensaje(false)}
            variant="danger"
            dismissible >
            <Alert.Heading>Ha ocurrido un problema</Alert.Heading>
            <p>Las credenciales otorgadas, no son correctas.</p>
        </Alert>
    )
}

export default Mensaje
