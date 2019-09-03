import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "../Link";
import { getIsAuthorized, removeAuth } from "../../modules/Auth";
import { removeProfile } from "../../modules/Profile";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#ffffff"
  },
  title: {
    flexGrow: 1
  }
}));

const Header = ({ isAuthorized, removeAuth, removeProfile }) => {
  const classes = useStyles();

  const logout = () => {
    removeAuth();
    removeProfile();
  };

  return (
    <AppBar position="static" color="default" className={classes.header}>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        minHeight={64}
        pr={2}
        pl={2}
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
        {isAuthorized ? (
          <Button onClick={logout}>Выйти</Button>
        ) : (
          <Button component={Link} to="/login">
            Войти
          </Button>
        )}
      </Box>
    </AppBar>
  );
};

export default connect(
  state => ({
    isAuthorized: getIsAuthorized(state)
  }),
  { removeAuth, removeProfile }
)(Header);
