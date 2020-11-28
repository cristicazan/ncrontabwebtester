import React from "react";
import Occurrences from "./pages/occurrences/Occurrences";
import Expression from "./pages/expression/Expression";
import Tabs from "@material-ui/core/Tabs/Tabs";
import { Container, createMuiTheme, Grid, Tab, Theme, ThemeProvider } from "@material-ui/core";
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";
import { indigo } from "@material-ui/core/colors";

class App extends React.Component<{}, { tab: string }> {
  constructor(props: {}) {
    super(props);

    this.state = {
      tab: 'occurrences',
    };

    // This binding is necessary to make `this` work in the callback
    this.handleTabChange = this.handleTabChange.bind(this);
  }

  theme: Theme = createMuiTheme({
    palette: {
      secondary: {
        main: indigo[400],
      },
      primary: {
        main: indigo[300],
      },
    },
    overrides: {
      MuiTab: {
        root: {
          maxWidth: '100%'
        }
      },
      MuiFormGroup: {
        row: {
          paddingTop: '10px'
        }
      }
    }
  });

  handleTabChange(event: React.ChangeEvent<{}>, newValue: string) {
    this.setState({
      tab: newValue
    })
  };

  render() {
    return (
      <div>
        <ThemeProvider theme={this.theme}>
          <Container maxWidth="lg">
            <Router>
              <Grid container spacing={2}>
                <Grid item sm={4} md={3} >
                  <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={this.state.tab}
                    onChange={this.handleTabChange}
                    aria-label="Vertical tabs example"
                  >
                    <Tab label="Generate occurrences" value="occurrences" component={Link} to="/occurrences" color="primary" />
                    <Tab label="Generate expression" value="expression" component={Link} to="/expression" color="primary" />
                  </Tabs>
                </Grid>

                <Grid item sm={8} md={9} container>
                  <Switch>
                    <Route path="/occurrences" component={Occurrences} />
                    <Route path="/expression" component={Expression} />
                    <Redirect to="/occurrences" />
                  </Switch>
                </Grid>
              </Grid>
            </Router>
          </Container>
        </ThemeProvider>
      </div>
    )
  }
}

export default App;