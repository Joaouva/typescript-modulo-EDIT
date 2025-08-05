import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Crie um objeto com métodos que implementam um sistema de validação.";
const solution = `const validator = { isEmail: (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email), isRequired: (value: any) => value !== null && value !== undefined && value !== '', isValid: (value: any, rules: Function[]) => rules.every(rule => rule(value)) };`;

const Exercise45: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 45" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 45 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise45;
