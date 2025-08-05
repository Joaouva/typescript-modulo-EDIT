import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Crie uma interface para um sistema de validação.";
const solution = `interface SistemaValidacao { validar: (dados: any, regras: any[]) => boolean; obterErros: () => string[]; }`;

const Exercise96: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 96" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 96 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise96;
