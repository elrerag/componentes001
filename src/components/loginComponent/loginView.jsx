import React from 'react'

import LoginComponent from './index'

import {Row, Col} from 'react-bootstrap'

const LoginView = () => 
<div>
    <Row><Col></Col></Row>
    <Row>
        <Col></Col>
        <Col><LoginComponent /></Col>
        <Col></Col>
    </Row>
    <Row><Col></Col></Row>
</div>

export default LoginView