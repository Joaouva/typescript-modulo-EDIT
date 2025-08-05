import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Escreva uma função que retorna uma função (higher-order function).";
const solution = `function createMultiplier(factor: number) { return (num: number) => num * factor; }`;

const Exercise14: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 14" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 14 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise14;
