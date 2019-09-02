import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from '../Link';
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
        <Button component={Link} to="/map">
          Карта
        </Button>
        <Button component={Link} to="/profile">
          Профиль
        </Button>
        <Button component={Link} to="/login">
          Войти
        </Button>
      </Grid>
    </AppBar>
  );
};
