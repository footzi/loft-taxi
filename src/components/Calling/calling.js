import React, { useState, useEffect } from "react";
import axios from "axios";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";

const Calling = ({setCoords}) => {
  const [values, setValues] = useState({
    departure: "",
    arrival: ""
  });
  const [addresses, setAddresses] = useState([]);

  const onChange = event => {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value
    }));

    setAddresses(oldValues => {
      return oldValues.map(item => {
        if (item.name === event.target.value) {
          item.isSelected = true;
        } else {
          item.isSelected = false;
        }
        return item;
      });
    });
  };

  const onCalling = () => {
    const { departure, arrival} = values;

    if (!departure && !arrival) {
      return;
    }

    axios.get(`https://loft-taxi.glitch.me/route?address1=${departure}&address2=${arrival}`).then(response => {
      setCoords(response.data)
    })
  }

  useEffect(() => {
    axios.get("https://loft-taxi.glitch.me/addressList").then(response => {
      const { addresses } = response.data;

      const normalizeAddresses = addresses.map((item, index) => {
        return {
          id: index,
          name: item,
          isSelected: false
        };
      });

      setAddresses(normalizeAddresses);
    });
  }, []);

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
                {addresses.map(item => (
                  <MenuItem
                    key={item.id}
                    value={item.name}
                    disabled={item.isSelected}
                  >
                    {item.name}
                  </MenuItem>
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
                {addresses.map(item => (
                  <MenuItem
                    key={item.id}
                    value={item.name}
                    disabled={item.isSelected}
                  >
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box py={2}>
            <Button variant="outlined" color="primary" onClick={onCalling}>
              ВЫЗВАТЬ ТАКСИ
            </Button>
          </Box>
        </Paper>
      )}
    </Box>
  );
};

export default Calling;
