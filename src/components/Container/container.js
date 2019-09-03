import React from "react";
import Box from "@material-ui/core/Box";

const Container = ({ children }) => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    minHeight="calc(100vh - 64px)"
  >
    {children}
  </Box>
);

export default Container;