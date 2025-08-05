import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Escreva uma função que aceita um objeto e retorna uma versão com propriedades readonly.";
const solution = `function makeReadonly<T>(obj: T): Readonly<T> { return Object.freeze({ ...obj }); }`;

const Exercise40: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 40" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 40 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise40;
