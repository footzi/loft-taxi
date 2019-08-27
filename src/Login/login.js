import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export const Login = () => {
  return (
    <Grid item sm={3}>
      <form>
        <Box p={3} my={4}>
          {props => (
            <Paper {...props}>
              <Box py={1}>
                <Typography variant="h4" component="h1" align="center">
                  Войти
                </Typography>
              </Box>
              <Box py={1}>
                <TextField id="standard-name" label="Name" fullWidth />
              </Box>
              <Box py={1}>
                <TextField id="standard-name" label="Name" fullWidth />
              </Box>
              <Box py={2}>
                <Button
                  variant="outlined"
                  color="primary"
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