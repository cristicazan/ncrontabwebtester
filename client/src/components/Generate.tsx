import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import REACT_APP_API_URL from "../App";

// import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export default function Generate() {
    const [state, setState] =
        useState<{ startDate: null | Date, endDate: null | Date, includingSeconds: boolean, expression: string }>
            ({ startDate: null, endDate: null, includingSeconds: false, expression: '' });

    function setStartDate(startDate: Date) {
        setState(prevState => ({ ...prevState, startDate }));
    }

    function setEndDate(endDate: Date) {
        setState(prevState => ({ ...prevState, endDate }));
    }

    function setIncludingSeconds(includingSecondsCheckEvent: any) {
        setState(prevState => ({ ...prevState, includingSeconds: JSON.parse(includingSecondsCheckEvent.target.checked) }));
    }

    function setExpression(expression: string) {
        setState(prevState => ({ ...prevState, expression }));
    }

    async function buttonClicked() {
        const url = REACT_APP_API_URL + '/getnextoccurrences'
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(state)
        })
            .then(response => response.json())
            .then((response) => { console.log(response); })
    }

    return (
        <div>
            <Form>
                <Form.Group as={Row}>
                    <Col xs={{ span: 2, offset: 0 }}>
                        <DatePicker
                            placeholderText="Start date"
                            selected={state.startDate}
                            onChange={(date: Date) => date && setStartDate(date)}
                        />
                    </Col> {' '}

                    <Col xs={{ span: 2, offset: 1 }}>
                        <DatePicker
                            placeholderText="End date"
                            selected={state.endDate}
                            onChange={(date: Date) => date && setEndDate(date)}
                        />
                    </Col> {' '}

                </Form.Group>

                <Form.Group as={Row}>

                    <Col xs={{ span: 3, offset: 0 }}>
                        <Form.Control
                            placeholder="Expression"
                            value={state.expression}
                            onChange={event => setExpression(event.target.value)}
                        />
                    </Col>

                    <Col xs={{ span: 3, offset: 0 }}>
                        <Form.Check
                            type="switch"
                            id="switch"
                            checked={state.includingSeconds}
                            onChange={setIncludingSeconds}
                            label="Include seconds"
                        />
                    </Col>

                </Form.Group>

                <Form.Group as={Row}>
                    <Col xs={{ span: 4, offset: 0 }}>
                        <Button variant="primary" onClick={buttonClicked}>Calculate</Button>
                    </Col>
                </Form.Group>
            </Form>
        </div>
    );
}
