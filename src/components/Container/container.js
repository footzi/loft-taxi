import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import { Calling } from '../Calling';
import { Profile } from '../Profile';
import { Map } from '../Map';

const useStyles = makeStyles(theme => ({
  // !FIX
  container: {
    minHeight: "100vh"
  }
}));

export const ContainerV = ({children}) => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      className={classes.container}
    >
      {children}
      {/* <Login /> */}
      {/* <Calling /> */}
      {/* <Filling /> */}
      {/* <Profile /> */}
      {/* <Map /> */}
      

    </Grid>
  );
};