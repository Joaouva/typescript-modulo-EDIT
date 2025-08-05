import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Escreva uma função que aceita uma condição e retorna uma função que filtra arrays.";
const solution = `function createFilter<T>(predicate: (item: T) => boolean) { return (arr: T[]) => arr.filter(predicate); }`;

const Exercise28: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 28" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 28 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise28;
