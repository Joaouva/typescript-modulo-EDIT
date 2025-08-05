import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Escreva uma função que aceita um array e retorna o elemento com a maior propriedade.";
const solution = `function maxBy<T>(arr: T[], key: keyof T): T | undefined { return arr.reduce((max, item) => item[key] > max[key] ? item : max); }`;

const Exercise32: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 32" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 32 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise32;
