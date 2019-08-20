import React from 'react'
import {Row, Col} from 'react-bootstrap'
import Img from 'react-image'

const HeaderSection = () =>
<Row>
    <Col>
        <Img 
          width="20%"
          higth="50px"
          src="https://scotiabankfiles.azureedge.net/scotiabank-chile/logo-scotiabank-nuevo-2.svg" />
    </Col>
</Row>

export default HeaderSection