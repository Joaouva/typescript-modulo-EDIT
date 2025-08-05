import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Escreva uma função que aceita uma função e retorna uma versão com debounce.";
const solution = `function debounce<T extends (...args: any[]) => any>(fn: T, delay: number): T { let timeoutId: NodeJS.Timeout; return ((...args: any[]) => { clearTimeout(timeoutId); timeoutId = setTimeout(() => fn(...args), delay); }) as T; }`;

const Exercise42: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 42" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 42 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise42;
