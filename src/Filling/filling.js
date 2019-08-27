import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

export const Filling = () => {
  return (
    <Grid item sm={4}>
      <Box p={3} my={4}>
        {props => (
          <Paper {...props}>
            <Box py={1}>
              <Typography variant="h4" component="h1">
                Заполните платежные данные
              </Typography>
            </Box>
            <Box py={1}>
              <Typography variant="body2" component="p">
                Укажите информацию о банковской карте, чтобы сделать заказ.
              </Typography>
            </Box>
            <Box py={2}>
              <Button variant="outlined" color="primary">
                Перейти в профиль
              </Button>
            </Box>
          </Paper>
        )}
      </Box>
    </Grid>
  );
};
