import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Escreva uma função que aceita um objeto e uma chave, retornando o valor se existir.";
const solution = `function getValue<T, K extends keyof T>(obj: T, key: K): T[K] | undefined { return obj[key]; }`;

const Exercise70: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 70" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 70 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise70;
