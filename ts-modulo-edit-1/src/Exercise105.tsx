import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Escreva uma função que aceita um parâmetro que pode ser um array ou um objeto.";
const solution = `function processInput(input: any[] | object): any[] { return Array.isArray(input) ? input : Object.values(input); }`;

const Exercise105: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 105" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 105 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise105;
