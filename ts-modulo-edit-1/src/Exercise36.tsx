import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Escreva uma função que aceita um objeto e retorna uma versão com propriedades opcionais.";
const solution = `function makeOptional<T>(obj: T): Partial<T> { return obj; }`;

const Exercise36: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 36" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 36 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise36;
