import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Crie uma interface para um produto com propriedades opcionais.";
const solution = `interface Produto { nome: string; preco: number; categoria?: string; descricao?: string; }`;

const Exercise61: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 61" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 61 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise61;
