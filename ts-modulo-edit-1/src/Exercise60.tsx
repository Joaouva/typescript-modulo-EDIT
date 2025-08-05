import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Escreva uma função que aceita um parâmetro string ou number e retorna o seu comprimento (se string) ou valor (se number).";
const solution = `function processValue(value: string | number): number { return typeof value === 'string' ? value.length : value; }`;

const Exercise60: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 60" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 60 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise60;
