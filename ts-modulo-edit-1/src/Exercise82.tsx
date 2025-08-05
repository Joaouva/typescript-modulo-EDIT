import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Crie um enum para estados de conexão (Desconectado, Conectando, Conectado, Erro).";
const solution = `enum EstadoConexao { Desconectado = 'desconectado', Conectando = 'conectando', Conectado = 'conectado', Erro = 'erro' }`;

const Exercise82: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 82" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 82 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise82;
