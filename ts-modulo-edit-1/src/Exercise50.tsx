import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Escreva uma função que aceita um objeto e retorna uma versão com propriedades calculadas.";
const solution = `function addComputedProps<T>(obj: T, computed: Record<string, () => any>): T & typeof computed { return { ...obj, ...computed }; }`;

const Exercise50: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 50" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 50 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise50;
