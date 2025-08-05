import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Crie uma interface para um sistema de notificações.";
const solution = `interface SistemaNotificacoes { enviar: (mensagem: string, tipo: 'info' | 'erro' | 'sucesso') => void; limpar: () => void; }`;

const Exercise71: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 71" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 71 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise71;
