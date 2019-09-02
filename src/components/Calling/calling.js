import React, {useState, useEffect} from "react";
import axios from 'axios';
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";

const Calling = () => {
  const [values, setValues] = useState({
    departure: '',
    arrival: ''
  });
  const [addresses, setAddresses] = useState([]);

  const onChange = (event) => {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));

    setAddresses((oldValues) => {
      console.log(oldValues.filter((item) => item !== event.target.value))
      console.log(event.target.value)
      return oldValues.filter((item) => item !== event.target.value);
    })
  }

  useEffect(() => {
    axios.get('https://loft-taxi.glitch.me/addressList').then((response) => {
      const {addresses} = response.data;

      setAddresses(addresses);
    })
  },[])

  return (
    <Box p={3} my={4} position="absolute" left="20px" top="0" width="30%">
    {props => (
      <Paper {...props}>
        <Box py={1}>
          <Typography variant="h4" component="h1">
            Вызов такси
          </Typography>
        </Box>
        <Box py={1}>
          <FormControl fullWidth>
            <InputLabel htmlFor="departure">
              Выберите адрес отправления
            </InputLabel>
            <Select
              value={values.departure}
              onChange={onChange}
              inputProps={{
                name: "departure",
                id: "departure"
              }}
            >
              {addresses.map((item, index) => (
                <MenuItem key={index} value={item}>{item}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box py={1}>
          <FormControl fullWidth>
            <InputLabel htmlFor="arrival">Выберите адрес при</InputLabel>
            <Select
              value={values.arrival}
              onChange={onChange}
              inputProps={{
                name: "arrival",
                id: "arrival"
              }}
            >
              {addresses.map((item, index) => (
                <MenuItem key={index} value={index}>{item}</MenuItem>
              ))}
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
  )
};

export default Calling;
