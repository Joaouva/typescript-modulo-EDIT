import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Escreva uma função que aceita um parâmetro que pode ser um número ou um array de números.";
const solution = `function sumNumbers(input: number | number[]): number { return Array.isArray(input) ? input.reduce((sum, num) => sum + num, 0) : input; }`;

const Exercise85: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 85" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 85 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise85;
