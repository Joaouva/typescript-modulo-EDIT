import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Crie um tipo para um jogo com estado e métodos para manipular o estado.";
const solution = `interface Jogo { estado: 'iniciado' | 'pausado' | 'terminado'; pontuacao: number; iniciar: () => void; pausar: () => void; terminar: () => void; }`;

const Exercise35: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 35" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 35 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise35;
