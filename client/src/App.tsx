import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";

import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";

import Generate from "./components/Generate";

export const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

class App extends Component {

  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col xs={{ span: 8, offset: 2 }}>
              <Generate />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default App;
