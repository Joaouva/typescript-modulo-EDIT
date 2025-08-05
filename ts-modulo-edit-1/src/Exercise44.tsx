import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Escreva uma função que aceita um objeto e uma função de transformação para cada propriedade.";
const solution = `function transformObject<T>(obj: T, transform: (key: keyof T, value: T[keyof T]) => any): any { const result: any = {}; Object.keys(obj).forEach(key => { result[key] = transform(key as keyof T, obj[key as keyof T]); }); return result; }`;

const Exercise44: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 44" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 44 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise44;
