import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Escreva uma função que aceita um callback como parâmetro.";
const solution = `function processArray(arr: number[], callback: (num: number) => number): number[] { return arr.map(callback); }`;

const Exercise16: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 16" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 16 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise16;
