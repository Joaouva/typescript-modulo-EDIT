import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Escreva uma função que aceita um parâmetro que pode ser um objeto ou um array de objetos.";
const solution = `function processObjects(input: object | object[]): object[] { return Array.isArray(input) ? input : [input]; }`;

const Exercise95: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 95" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 95 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise95;
