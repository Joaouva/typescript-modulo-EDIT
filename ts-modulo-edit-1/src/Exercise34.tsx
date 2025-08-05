import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Escreva uma função que aceita uma função e retorna uma versão memoizada.";
const solution = `function memoize<T extends (...args: any[]) => any>(fn: T): T { const cache = new Map(); return ((...args: any[]) => { const key = JSON.stringify(args); if (cache.has(key)) return cache.get(key); const result = fn(...args); cache.set(key, result); return result; }) as T; }`;

const Exercise34: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 34" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 34 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise34;
