import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Crie uma função genérica que aceita um array e uma função de transformação.";
const solution = `function mapArray<T, U>(arr: T[], transform: (item: T) => U): U[] { return arr.map(transform); }`;

const Exercise136: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 136" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 136 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise136;
