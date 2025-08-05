import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Escreva uma função que aceita um parâmetro que pode ser uma string ou um objeto.";
const solution = `function processInput(input: string | object): string { return typeof input === 'string' ? input : JSON.stringify(input); }`;

const Exercise80: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 80" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 80 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise80;
