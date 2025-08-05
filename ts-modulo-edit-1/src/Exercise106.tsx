import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Crie uma função genérica que retorna o primeiro elemento de um array.";
const solution = `function first<T>(arr: T[]): T | undefined { return arr[0]; }`;

const Exercise106: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 106" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 106 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise106;
