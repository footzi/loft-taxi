import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { MemoryRouter as Router } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  header: {
    backgroundColor: "#ffffff"
  },
  grid: {
    paddingLeft: 24,
    paddingRight: 24,
    minHeight: 64
  },
  title: {
    flexGrow: 1
  }
}));

export const Header = () => {
  const classes = useStyles();
  const AdapterLink = React.forwardRef((props, ref) => (
    <RouterLink innerRef={ref} {...props} />
  ));

  return (
    <AppBar position="static" color="default" className={classes.header}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.grid}
      >
        <Typography variant="h6" component="h2" className={classes.title}>
          Loft Taxi
        </Typography>
        {/* <Router>
          <Button component={AdapterLink} to="/map">
            Карта
          </Button>
          <Button component={AdapterLink} to="/">
            Профиль
          </Button>
          <Button component={AdapterLink} to="/login">
            Войти
          </Button>
        </Router> */}
      </Grid>
    </AppBar>
  );
};
