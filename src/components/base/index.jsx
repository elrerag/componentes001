import React, {useState} from 'react'

import LoginView from '../loginComponent/loginView'

const BaseSection = () => {
    const [logeado, setLogeado] = useState(false)
    return(
        <div>
            {!logeado? <LoginView /> : <h1>Ingreso al sistema</h1>}
        </div>
    )
}

export default BaseSection