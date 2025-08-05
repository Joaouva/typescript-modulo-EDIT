import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Crie um tipo para um formulário com validação de campos obrigatórios.";
const solution = `interface Formulario { nome: string; email: string; telefone?: string; }`;

const Exercise21: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 21" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 21 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise21;
