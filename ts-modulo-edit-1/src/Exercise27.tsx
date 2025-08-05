import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Crie um tipo para um utilizador com métodos para atualizar informações.";
const solution = `interface Utilizador { nome: string; email: string; atualizarNome: (nome: string) => void; atualizarEmail: (email: string) => void; }`;

const Exercise27: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 27" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 27 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise27;
