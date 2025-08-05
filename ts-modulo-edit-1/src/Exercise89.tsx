import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Use interseção para criar um tipo que combina dados e validação.";
const solution = `type DadosValidados = Dados & Validacao;`;

const Exercise89: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 89" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 89 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise89;
