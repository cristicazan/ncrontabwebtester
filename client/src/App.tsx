import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function App() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col xs={{ span: 8, offset: 2 }}>
            Hello
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
