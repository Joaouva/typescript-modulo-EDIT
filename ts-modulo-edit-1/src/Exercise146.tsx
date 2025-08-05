import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Crie uma função genérica que aceita um objeto e retorna uma versão modificada.";
const solution = `function updateObject<T>(obj: T, updates: Partial<T>): T { return { ...obj, ...updates }; }`;

const Exercise146: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 146" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 146 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise146;
