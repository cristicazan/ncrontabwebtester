import React, { Fragment } from "react";
import { Button } from "@material-ui/core";
import { withSnackbar } from "notistack";
import { APIInstance } from "../../api/API.instance";

class SnackbarConfig extends React.Component<{ enqueueSnackbar: any, closeSnackbar: any }, { tab: string }> {
  constructor(props: { enqueueSnackbar: any, closeSnackbar: any }) {
    super(props);

    this.state = {
      tab: 'occurrences',
    };

    const action = (key: any) => (
      <Fragment>
        <Button onClick={() => { this.props.closeSnackbar(key) }} style={{ color: 'white' }}>Dismiss</Button>
      </Fragment>
    );

    APIInstance.interceptors.response.use(response => response, error => {
      this.props.enqueueSnackbar(error.response.data, {
        variant: 'error',
        style: { whiteSpace: 'pre-line' },
        autoHideDuration: 3000,
        action
      });
    })
  }

  render() {
    return <></>
  }
}

export default withSnackbar(SnackbarConfig);