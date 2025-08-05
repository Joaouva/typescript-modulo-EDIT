import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Crie uma interface para um sistema de autenticação.";
const solution = `interface SistemaAutenticacao { login: (usuario: string, senha: string) => boolean; logout: () => void; estaAutenticado: () => boolean; }`;

const Exercise101: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 101" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 101 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise101;
