import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Escreva uma função que aceita uma função e retorna uma versão com retry logic.";
const solution = `function withRetry<T extends (...args: any[]) => any>(fn: T, maxRetries: number): T { return ((...args: any[]) => { let lastError: Error; for (let i = 0; i <= maxRetries; i++) { try { return fn(...args); } catch (error) { lastError = error as Error; if (i === maxRetries) throw lastError; } } }) as T; }`;

const Exercise54: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 54" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 54 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise54;
