import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Crie um enum para níveis de acesso (Público, Privado, Protegido, Administrador).";
const solution = `enum NivelAcesso { Publico = 'publico', Privado = 'privado', Protegido = 'protegido', Administrador = 'administrador' }`;

const Exercise92: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 92" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 92 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise92;
