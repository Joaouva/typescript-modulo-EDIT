import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Escreva uma função que aceita parâmetros de diferentes tipos usando union types.";
const solution = `function processValue(value: string | number): string { return String(value); }`;

const Exercise19: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 19" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 19 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise19;
