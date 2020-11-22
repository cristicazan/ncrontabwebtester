import React, { Component } from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";

import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";

import Test from "./components/test/Test";

class App extends Component {

  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col xs={{ span: 8, offset: 2 }}>
              <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                  <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Test</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Generate</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={9}>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <Test />
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        Nothing
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default App;
