import React from "react";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const Posted = ({ removeLayout }) => (
  <Box p={3} my={4} position="absolute" left="20px" top="0" width="30%">
    {props => (
      <Paper {...props}>
        <Box py={1}>
          <Typography variant="h5" component="h1">
            Заказ размещен
          </Typography>
          <Box mt={2}>
            Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.
          </Box>

          <Box mt={2}>
            <Button
              variant="outlined"
              color="primary"
              onClick={removeLayout}
            >
              CДЕЛАТЬ НОВЫЙ ЗАКАЗ
            </Button>
          </Box>
        </Box>
      </Paper>
    )}
  </Box>
);

export default Posted;
