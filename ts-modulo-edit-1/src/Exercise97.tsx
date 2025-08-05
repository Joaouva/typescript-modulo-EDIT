import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Crie um enum para tipos de validação (Obrigatório, Email, Telefone, CPF).";
const solution = `enum TipoValidacao { Obrigatorio = 'obrigatorio', Email = 'email', Telefone = 'telefone', CPF = 'cpf' }`;

const Exercise97: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 97" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 97 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise97;
