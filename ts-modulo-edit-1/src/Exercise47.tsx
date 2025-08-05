import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Crie um tipo para um sistema de autenticação com métodos de login/logout.";
const solution = `interface Autenticacao { usuario: string | null; login: (usuario: string, senha: string) => boolean; logout: () => void; estaAutenticado: () => boolean; }`;

const Exercise47: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 47" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 47 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise47;
