import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Escreva uma função que aceita um array e uma função de comparação para ordenar.";
const solution = `function sortBy<T>(arr: T[], compareFn: (a: T, b: T) => number): T[] { return [...arr].sort(compareFn); }`;

const Exercise38: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 38" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 38 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise38;
