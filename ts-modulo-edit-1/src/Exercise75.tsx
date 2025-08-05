import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Escreva uma função que aceita um parâmetro que pode ser um array ou um valor único.";
const solution = `function processInput<T>(input: T | T[]): T[] { return Array.isArray(input) ? input : [input]; }`;

const Exercise75: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 75" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 75 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise75;
