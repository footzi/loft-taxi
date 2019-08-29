import React from "react";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

export const Filling = () => {
  return (
    <Box p={3} my={4} position="absolute" left="20px" top="0" maxWidth="30%">
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
  );
};
