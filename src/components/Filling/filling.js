import React from "react";
import { Link } from "../Link";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const Filling = () => (
  <Box p={3} my={4} position="absolute" left="20px" top="0" width="30%">
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
          <Button
            component={Link}
            to="/profile"
            variant="outlined"
            color="primary"
          >
            Перейти в профиль
          </Button>
        </Box>
      </Paper>
    )}
  </Box>
);

export default Filling;
