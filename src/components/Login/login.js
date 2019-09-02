import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { reduxForm, Field } from "redux-form";
import { submitLogin } from "../../modules/Auth/actions";
import { getIsAuthorized } from "../../modules/Auth";

const user = {
  name: "2",
  password: "2"
};

const Input = ({ input, meta: { touched, error }, ...rest }) => (
  <TextField
    {...input}
    {...rest}
    fullWidth
    error={touched && !!error}
    helperText={touched && error}
    autoComplete="off"
  />
);

const requiredValidate = value => (value ? undefined : "Это обязательное поле");
const loginValidate = value =>  (value === user.name ? undefined : "Неверный логин")
const passwordValidate = value =>  (value === user.name ? undefined : "Неверный пароль")

const Login = ({ handleSubmit, submitLogin, isAuthorized }) => {
  if (isAuthorized) return <Redirect to="/map" />;

  return (
    <Grid item sm={3}>
      <form onSubmit={handleSubmit(() => submitLogin())}>
        <Box p={3} my={4}>
          {props => (
            <Paper {...props}>
              <Box py={1}>
                <Typography variant="h4" component="h1" align="center">
                  Войти
                </Typography>
              </Box>
              <Box py={1}>
                <Field
                  name="name"
                  type="text"
                  id="name"
                  label="Имя пользователя"
                  required
                  component={Input}
                  validate={[requiredValidate, loginValidate]}
                />
              </Box>
              <Box py={1}>
                <Field
                  name="password"
                  type="password"
                  id="password"
                  label="Пароль"
                  required
                  component={Input}
                  validate={[requiredValidate, passwordValidate]}
                />
              </Box>
              <Box py={2}>
                <Button variant="outlined" color="primary" type="submit">
                  ВОЙТИ
                </Button>
              </Box>
            </Paper>
          )}
        </Box>
      </form>
    </Grid>
  );
};

export default compose(
  connect(
    state => ({
      isAuthorized: getIsAuthorized(state)
    }),
    { submitLogin }
  ),
  reduxForm({ form: "Login" })
)(Login);
