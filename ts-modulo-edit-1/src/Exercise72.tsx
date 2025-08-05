import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Crie um enum para níveis de prioridade (Baixa, Média, Alta, Crítica).";
const solution = `enum NivelPrioridade { Baixa = 1, Media = 2, Alta = 3, Critica = 4 }`;

const Exercise72: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 72" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 72 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise72;
