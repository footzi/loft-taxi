import React, { useState } from "react";
import { Link } from "../Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import { submitProfile, getProfile } from "../../modules/Profile";

const requiredValidate = value => (value ? undefined : "Это обязательное поле");
const cardNameValidate = value =>
  value && !/^[A-Za-z\s]+$/.test(value)
    ? "Только буквы латинского алфавита"
    : undefined;
const cardNumberValidate = value =>
  isNaN(Number(value)) || value.length !== 16
    ? "Номер состоит из 16 цифр"
    : undefined;
const cvvValidate = value =>
  isNaN(Number(value)) || value.length !== 3
    ? "CVV состоит из 3 цифр"
    : undefined;

const Input = ({ input, helperText, meta: { touched, error }, ...rest }) => (
  <TextField
    {...input}
    {...rest}
    fullWidth
    error={touched && !!error}
    helperText={(touched && error) || helperText}
  />
);

const Profile = ({ handleSubmit, submitProfile }) => {
  const [isSubmit, setIsSubmit] = useState(false);

  const onSubmit = value => {
    setIsSubmit(true);
    submitProfile(value);
  };

  if (isSubmit) {
    return (
      <Grid sm={6} item>
        <Box p={3} my={4}>
          {props => (
            <Paper {...props}>
              <Typography variant="h4" component="h1" align="center">
                Профиль
              </Typography>
              <Typography variant="subtitle1">
                Платёжные данные обновлены. Теперь вы можете заказывать такси.
              </Typography>
              <Box mt={1}>
                <Button
                  component={Link}
                  to="/map"
                  variant="outlined"
                  color="primary"
                  mt={1}
                >
                  ПЕРЕЙТИ НА КАРТУ
                </Button>
              </Box>
            </Paper>
          )}
        </Box>
      </Grid>
    );
  }

  if (!isSubmit) {
    return (
      <Grid sm={9} item>
        <form onSubmit={handleSubmit(value => onSubmit(value))}>
          <Box p={3} my={4}>
            {props => (
              <Paper {...props}>
                <Box py={1}>
                  <Typography variant="h4" component="h1" align="center">
                    Профиль
                  </Typography>
                  <Typography variant="h6" component="h6">
                    Способ оплаты
                  </Typography>
                </Box>
                <Grid container>
                  <Grid item sm={6}>
                    <Box py={1} mr={4}>
                      <Field
                        name="cardName"
                        type="text"
                        id="cardName"
                        label="Имя владельца"
                        placeholder="Имя владельца"
                        required
                        component={Input}
                        validate={[requiredValidate, cardNameValidate]}
                      />
                    </Box>
                  </Grid>
                  <Grid item sm={6}>
                    <Box py={1}>
                      <Field
                        name="cardNumber"
                        type="text"
                        id="cardNumber"
                        label="Номер карты"
                        required
                        placeholder="Номер карты"
                        component={Input}
                        validate={[requiredValidate, cardNumberValidate]}
                      />
                    </Box>
                  </Grid>
                  <Grid item sm={6}>
                    <Box py={1} mr={4}>
                      <Field
                        name="expDate"
                        type="date"
                        id="expDate"
                        label="Дата окончания действия"
                        required
                        component={Input}
                        InputLabelProps={{
                          shrink: true
                        }}
                      />
                    </Box>
                  </Grid>
                  <Grid item sm={6}>
                    <Box py={1}>
                      <Field
                        name="cvv"
                        type="text"
                        id="cvv"
                        label="CVV"
                        placeholder="CVV"
                        helperText="Last three digits on signature strip"
                        required
                        component={Input}
                        validate={[requiredValidate, cvvValidate]}
                      />
                    </Box>
                  </Grid>
                </Grid>
                <Box pt={4}>
                  <Button variant="contained" color="primary" type="submit">
                    CОХРАНИТЬ
                  </Button>
                </Box>
              </Paper>
            )}
          </Box>
        </form>
      </Grid>
    );
  }
};

export default compose(
  connect(
    state => {
      const profile = getProfile(state);

      return {
        initialValues: {
          cardName: profile ? profile.cardName : "",
          cardNumber: profile ? profile.cardNumber : "",
          expDate: profile ? profile.expDate : "",
          cvv: profile ? profile.cvv : ""
        }
      };
    },
    { submitProfile }
  ),
  reduxForm({ form: "Profile" })
)(Profile);
