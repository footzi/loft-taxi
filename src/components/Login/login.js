import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormHelperText from "@material-ui/core/FormHelperText";
import { reduxForm, Field, SubmissionError } from "redux-form";
import { submitLogin } from "../../modules/Auth/actions";
import { getIsAuthorized } from "../../modules/Auth";

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

const Login = ({ handleSubmit, submitLogin, isAuthorized, error }) => {
  const onSubmit = async value => {
    const { username, password } = value;

    return axios
      .get(
        `https://loft-taxi.glitch.me/auth?username=${username}&password=${password}`
      )
      .then(response => {
        const { data } = response;

        if (data.success) {
          submitLogin();
        } else {
          throw new Error(data.error);
        }
      })
      .catch(error => {
        throw new SubmissionError({
          _error: error.message
        });
      });
  };

  if (isAuthorized) return <Redirect to="/map" />;

  return (
    <Grid item sm={3}>
      <form onSubmit={handleSubmit(value => onSubmit(value))}>
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
                  name="username"
                  type="text"
                  id="username"
                  label="Имя пользователя"
                  required
                  component={Input}
                  validate={[requiredValidate]}
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
                  validate={[requiredValidate]}
                />
              </Box>
              <FormHelperText error={true}> {error} </FormHelperText>
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
