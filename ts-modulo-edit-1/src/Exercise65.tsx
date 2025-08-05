import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Escreva uma função que aceita um array de strings ou numbers e retorna a soma.";
const solution = `function sumArray(arr: (string | number)[]): number { return arr.reduce((sum, item) => sum + (typeof item === 'string' ? item.length : item), 0); }`;

const Exercise65: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 65" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 65 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise65;
