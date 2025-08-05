import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Escreva uma função que aceita uma função e retorna uma versão com throttle.";
const solution = `function throttle<T extends (...args: any[]) => any>(fn: T, delay: number): T { let lastCall = 0; return ((...args: any[]) => { const now = Date.now(); if (now - lastCall >= delay) { lastCall = now; return fn(...args); } }) as T; }`;

const Exercise48: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 48" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 48 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise48;
