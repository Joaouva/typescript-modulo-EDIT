import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Crie um enum para status de pedidos (Pendente, Aprovado, Rejeitado, Enviado).";
const solution = `enum StatusPedido { Pendente = 'pendente', Aprovado = 'aprovado', Rejeitado = 'rejeitado', Enviado = 'enviado' }`;

const Exercise62: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 62" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 62 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise62;
