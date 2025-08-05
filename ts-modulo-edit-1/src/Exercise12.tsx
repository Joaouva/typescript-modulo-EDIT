import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Escreva uma função que aceita um número variável de argumentos usando rest parameters.";
const solution = `function sum(...numbers: number[]): number { return numbers.reduce((sum, num) => sum + num, 0); }`;

const Exercise12: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 12" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 12 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise12;
