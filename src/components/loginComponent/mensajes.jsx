import React from 'react'
import { Alert } from 'react-bootstrap'

const Alerta = ({elemento}) => {
    return (
        <Alert variant={ elemento.variant } dismissible>
        <Alert.Heading>{ elemento.titulo }</Alert.Heading>
        <p>{ elemento.cuerpo }</p>
    </Alert>
    )
}

export const Mensajes = ({mensajes}) => {
    return(
        mensajes.map((elemento, indice) => <Alerta key={indice} elemento={ elemento } />)
    )
}

export default Mensajes
