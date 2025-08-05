import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Escreva uma função com um parâmetro por defeito.";
const solution = `function multiply(a: number, b: number = 1): number { return a * b; }`;

const Exercise9: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 9" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 9 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise9;
