import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { reduxForm, Field } from 'redux-form';

const user = {
  name: '2',
  password: '2'
}

const Input = ({input, meta: {touched, error}, ...rest}) => <TextField {...input} {...rest} fullWidth error={touched && !!error} helperText={touched && error} autoComplete="off" />;

const validate = (values) => {
  const { name, password } = values;
  const errors = {};

  if (name !== user.name) {
    errors.name = 'Неверный логин'
  }

  if (password !== user.password) {
    errors.password = 'Неправильный пароль'
  }
  
  return errors;
}

const Login = ({ handleSubmit }) => {
  return (
    <Grid item sm={3}>
      <form onSubmit={handleSubmit(val => console.log(val))}>
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
                  label="Имя пользователя*"
                  component={Input}
                />
                
              </Box>
              <Box py={1}>
              <Field
                  name="password"
                  type="password"
                  id="password"
                  label="Пароль*"
                  component={Input}
                />
              </Box>
              <Box py={2}>
                <Button
                  variant="outlined"
                  color="primary"
                  type="submit"
                >
                  Primary
                </Button>
              </Box>
            </Paper>
          )}
        </Box>
      </form>
    </Grid>
  );
};

export default reduxForm({
  form: "Login",
  validate: validate
})(Login); 