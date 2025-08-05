import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Crie um enum para cores.";
const solution = `enum Cores { Vermelho = 'vermelho', Azul = 'azul', Verde = 'verde', Amarelo = 'amarelo' }`;

const Exercise57: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 57" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 57 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise57;
