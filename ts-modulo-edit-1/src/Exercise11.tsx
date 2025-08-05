import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Crie uma função que recebe um array de números e retorna a média.";
const solution = `function average(numbers: number[]): number { return numbers.reduce((sum, num) => sum + num, 0) / numbers.length; }`;

const Exercise11: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 11" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 11 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise11;
