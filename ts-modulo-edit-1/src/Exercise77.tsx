import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Crie um enum para tipos de operação (Criar, Ler, Atualizar, Eliminar).";
const solution = `enum TipoOperacao { Criar = 'criar', Ler = 'ler', Atualizar = 'atualizar', Eliminar = 'eliminar' }`;

const Exercise77: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 77" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 77 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise77;
