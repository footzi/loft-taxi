import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";

export const Calling = () => {
  return (
    <Grid item sm={4}>
      <Box p={3} my={4}>
        {props => (
          <Paper {...props}>
            <Box py={1}>
              <Typography variant="h4" component="h1">
                Вызов такси
              </Typography>
            </Box>
            <Box py={1}>
              <FormControl fullWidth>
                <InputLabel htmlFor="age-simple">
                  Выберите адрес отправления
                </InputLabel>
                <Select
                  value=""
                  inputProps={{
                    name: "age",
                    id: "age-simple"
                  }}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box py={1}>
              <FormControl fullWidth>
                <InputLabel htmlFor="age-simple1">
                  Выберите адрес при
                </InputLabel>
                <Select
                  value=""
                  inputProps={{
                    name: "age1",
                    id: "age-simple1"
                  }}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box py={2}>
              <Button variant="outlined" color="primary">
                ВЫЗВАТЬ ТАКСИ
              </Button>
            </Box>
          </Paper>
        )}
      </Box>
    </Grid>
  );
};
