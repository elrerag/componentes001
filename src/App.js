import React from 'react';
import { Row, Col, Card, Form, Button } from 'react-bootstrap'
import Img from 'react-image'

const App = () =>
  <div>
    <Row>
      <Col>
        <Img 
          width="20%"
          higth="50px"
          src="https://scotiabankfiles.azureedge.net/scotiabank-chile/logo-scotiabank-nuevo-2.svg" />
      </Col>
    </Row>
    <Row><Col></Col></Row>
    <Row>
      <Col></Col>
      <Col>
        <Card>
          <Card.Header>Ingreso al sistema</Card.Header>
          <Card.Body>
           
          <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
          </Card.Body>

        </Card>
      </Col>
      <Col></Col>
    </Row>
    <Row>
      <Col>
      <p class="canvas-text-footer canvas-color-default">© 2019 Scotiabank All Rights Reserved</p>
      </Col>
    </Row>
  </div>

export default App;
