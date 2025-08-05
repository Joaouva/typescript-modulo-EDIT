import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Crie uma função genérica que aceita um objeto e uma chave, retornando o valor.";
const solution = `function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] { return obj[key]; }`;

const Exercise126: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 126" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 126 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise126;
