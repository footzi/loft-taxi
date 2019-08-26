import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Login } from '../Login';

const useStyles = makeStyles(theme => ({
  container: {
    minHeight: "100vh"
  }
}));

export const ContainerV = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      className={classes.container}
    >
      <Login />
    </Grid>
  );
};
