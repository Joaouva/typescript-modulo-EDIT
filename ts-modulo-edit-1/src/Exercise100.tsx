import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Escreva uma função que aceita um parâmetro que pode ser uma string, número ou booleano.";
const solution = `function processPrimitive(value: string | number | boolean): string { return String(value); }`;

const Exercise100: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 100" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 100 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise100;
