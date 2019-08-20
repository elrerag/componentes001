import React, {useState} from 'react'
import { Alert } from 'react-bootstrap'

const Alerta = ({elemento}) => {
    const [mostrar, setMostrar] = useState(true)
    return (
        mostrar?
        <Alert 
            onClose={() => setMostrar(false)}
            variant={ elemento.variant } 
            dismissible >
            <Alert.Heading>{ elemento.titulo }</Alert.Heading>
            <p>{ elemento.cuerpo }</p>
        </Alert>: <div></div>
    )
}

export const Mensajes = ({mensajes}) => {
    return(
        mensajes.map((elemento, indice) => <Alerta key={indice} elemento={ elemento } />)
    )
}

export default Mensajes
