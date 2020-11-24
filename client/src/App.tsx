import React from "react";
import Test from "./pages/test/Test";
import Generate from "./pages/generate/Generate";
import Tabs from "@material-ui/core/Tabs/Tabs";
import { Tab } from "@material-ui/core";
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";

class App extends React.Component<{}, { tab: string }> {
  constructor(props: {}) {
    super(props);

    this.state = {
      tab: 'test'
    };

    // This binding is necessary to make `this` work in the callback
    this.handleTabChange = this.handleTabChange.bind(this);
  }

  handleTabChange(event: React.ChangeEvent<{}>, newValue: string) {
    this.setState({
      tab: newValue
    })
  };

  render() {
    return (
      <div>
        <Router>
          <div>
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={this.state.tab}
              onChange={this.handleTabChange}
              aria-label="Vertical tabs example"
            >
              <Tab label="Item One" value="test" component={Link} to="/test" />
              <Tab label="Item Two" value="generate" component={Link} to="/generate" />

            </Tabs>

            <Switch>
              <Route path="/test" component={Test} />
              <Route path="/generate" component={Generate} />
              <Redirect to="/test" />
            </Switch>

          </div>

        </Router>

        {/* <Container fluid>
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
        </Container> */}
      </div>
    )
  }
}

export default App;