import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import DatePicker from 'react-datepicker';

function App() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <Container fluid>
        <Row>
          <Col xs={{ span: 8, offset: 2 }}>
            <DatePicker selected={startDate} onChange={(date: Date) => date && setStartDate(date)} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
