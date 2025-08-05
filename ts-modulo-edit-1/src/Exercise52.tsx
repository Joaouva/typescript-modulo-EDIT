import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Escreva uma função que aceita um array e retorna elementos únicos.";
const solution = `function unique<T>(arr: T[]): T[] { return [...new Set(arr)]; }`;

const Exercise52: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 52" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 52 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise52;
