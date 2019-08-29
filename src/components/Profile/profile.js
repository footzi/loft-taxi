import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export const Profile = () => {
  return (
    <Grid sm={9} item>
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
                  <TextField id="standard-name" label="Name" fullWidth />
                </Box>
              </Grid>
              <Grid item sm={6}>
                <Box py={1}>
                  <TextField id="standard-name" label="Name" fullWidth />
                </Box>
              </Grid>
              <Grid item sm={6}>
                <Box py={1} mr={4}>
                  <TextField id="standard-name" label="Name" fullWidth />
                </Box>
              </Grid>
              <Grid item sm={6}>
                <Box py={1}>
                  <TextField id="standard-name" label="Name" fullWidth />
                </Box>
              </Grid>
            </Grid>
            <Box pt={4}>
              <Button variant="contained" color="primary">
                CОХРАНИТЬ
              </Button>
            </Box>
          </Paper>
        )}
      </Box>
    </Grid>
  );
};
