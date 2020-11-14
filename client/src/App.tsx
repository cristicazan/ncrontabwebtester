import React, { useState } from 'react';
import { ButtonGroup, Col, Container, Form, Row, ToggleButton } from 'react-bootstrap';
import DatePicker from "react-datepicker";

// import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

function App() {
  const [state, setState] =
    useState<{ startDate: null | Date, endDate: null | Date, isSixPart: boolean, expression: string }>
      ({ startDate: null, endDate: null, isSixPart: false, expression: '' });

  function setStartDate(startDate: Date) {
    setState(prevState => ({ ...prevState, startDate }));
  }

  function setEndDate(endDate: Date) {
    setState(prevState => ({ ...prevState, endDate }));
  }

  function setIsSixPart(isSixPart: boolean) {
    setState(prevState => ({ ...prevState, isSixPart }));
    console.log(isSixPart);
  }

  function setExpression(expression: string) {
    setState(prevState => ({ ...prevState, expression }));
  }

  const radios = [
    { name: "5 chars", value: false },
    { name: "6 chars", value: true }
  ];

  return (
    <div>
      <Container fluid>
        <Row>
          <Col xs={{ span: 8, offset: 2 }}>
            <Form>
              <Form.Group as={Row}>
                <Col xs={{ span: 2, offset: 0 }}>
                  <DatePicker
                    placeholderText="Start date"
                    selected={state.startDate}
                    onChange={(date: Date) => date && setStartDate(date)}
                  />
                </Col>

                <Col xs={{ span: 2, offset: 1 }}>
                  <DatePicker
                    placeholderText="End date"
                    selected={state.endDate}
                    onChange={(date: Date) => date && setEndDate(date)}
                  />
                </Col>

                <Col xs={{ span: 2, offset: 1 }}>
                  <Form.Control
                    placeholder="Expression"
                    value={state.expression}
                    onChange={event => setExpression(event.target.value)}
                  />
                </Col>

                <Col xs={{ span: 2, offset: 1 }}>
                  <ButtonGroup toggle>
                    {radios.map((radio, index) => (
                      <ToggleButton
                        key={index}
                        type="radio"
                        name="radio"
                        value={radio.value}
                        checked={state.isSixPart === radio.value}
                        onChange={e => {
                          console.log(e.currentTarget.value);
                          setIsSixPart(JSON.parse(e.currentTarget.value));
                        }}>
                        {radio.name}
                      </ToggleButton>
                    ))}
                  </ButtonGroup>
                </Col>

              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
