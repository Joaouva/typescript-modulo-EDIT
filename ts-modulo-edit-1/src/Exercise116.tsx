import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Crie uma função genérica que aceita dois arrays e retorna um array combinado.";
const solution = `function combineArrays<T>(arr1: T[], arr2: T[]): T[] { return [...arr1, ...arr2]; }`;

const Exercise116: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 116" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 116 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise116;
