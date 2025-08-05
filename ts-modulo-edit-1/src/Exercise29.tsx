import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Crie um objeto com métodos que implementam um sistema de notificações.";
const solution = "const notificacoes = { enviar: (mensagem: string, tipo: 'info' | 'erro' | 'sucesso') => console.log(\`${tipo}: ${mensagem}\`), limpar: () => console.log('Notificações limpas') };";

const Exercise29: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 29" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 29 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise29;
