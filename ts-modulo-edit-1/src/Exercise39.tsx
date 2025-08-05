import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Crie um tipo para um sistema de permissões com métodos para verificar acesso.";
const solution = `interface Permissoes { roles: string[]; verificarAcesso: (recurso: string) => boolean; adicionarRole: (role: string) => void; }`;

const Exercise39: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 39" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 39 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise39;
