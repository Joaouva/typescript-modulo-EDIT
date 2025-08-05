import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Escreva uma função que aceita um número e retorna uma função que multiplica por esse número.";
const solution = `function createMultiplier(factor: number) { return (num: number) => num * factor; }`;

const Exercise26: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 26" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 26 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise26;
