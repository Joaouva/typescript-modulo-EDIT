import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Crie um tipo para um produto com nome, preço e categoria opcional.";
const solution = `interface Produto { nome: string; preco: number; categoria?: string; }`;

const Exercise13: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 13" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 13 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise13;
