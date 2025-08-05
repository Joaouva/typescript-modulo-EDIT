import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Crie um tipo para um pedido com status e métodos para atualizar o status.";
const solution = `interface Pedido { id: string; status: 'pendente' | 'aprovado' | 'enviado'; atualizarStatus: (status: Pedido['status']) => void; }`;

const Exercise31: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 31" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 31 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise31;
