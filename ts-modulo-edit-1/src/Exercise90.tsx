import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Escreva uma função que aceita um parâmetro que pode ser uma função ou um valor.";
const solution = `function processValue(value: Function | any): any { return typeof value === 'function' ? value() : value; }`;

const Exercise90: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 90" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 90 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise90;
