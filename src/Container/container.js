import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Login } from '../Login';
import { Calling } from '../Calling';
import { Filling } from '../Filling';
import { Profile } from '../Profile';

const useStyles = makeStyles(theme => ({
  // !FIX
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
      {/* <Login /> */}
      {/* <Calling /> */}
      {/* <Filling /> */}
      <Profile />
      

    </Grid>
  );
};


var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
 
mapboxgl.accessToken = 'pk.eyJ1IjoiZm9vdHppIiwiYSI6ImNqenU3aW9uajAwbHQzbW1yYjRlcGd5dHYifQ.JuyDnQXJ44WSLErdhTQO5g';
var map = new mapboxgl.Map({
container: 'YOUR_CONTAINER_ELEMENT_ID',
style: 'mapbox://styles/mapbox/streets-v11'
});