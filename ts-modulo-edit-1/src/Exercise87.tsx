import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Crie um enum para tipos de filtro (Texto, Número, Data, Booleano).";
const solution = `enum TipoFiltro { Texto = 'texto', Numero = 'numero', Data = 'data', Booleano = 'booleano' }`;

const Exercise87: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 87" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 87 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise87;
