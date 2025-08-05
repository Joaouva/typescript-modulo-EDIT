import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Escreva uma função que aceita um objeto e uma lista de chaves para extrair.";
const solution = `function pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> { const result = {} as Pick<T, K>; keys.forEach(key => { result[key] = obj[key]; }); return result; }`;

const Exercise30: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 30" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 30 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise30;
