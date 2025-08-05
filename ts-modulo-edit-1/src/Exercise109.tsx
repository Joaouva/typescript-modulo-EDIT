import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Use Partial para tornar todas as propriedades de um tipo opcionais.";
const solution = `type ConfiguracaoOpcional = Partial<Configuracao>;`;

const Exercise109: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 109" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 109 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise109;
