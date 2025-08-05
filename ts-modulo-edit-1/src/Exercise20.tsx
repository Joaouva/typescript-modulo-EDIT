import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Escreva uma função que retorna um objeto com métodos encadeáveis.";
const solution = `const calculator = { value: 0, add(n: number) { this.value += n; return this; }, multiply(n: number) { this.value *= n; return this; } };`;

const Exercise20: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 20" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 20 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise20;
