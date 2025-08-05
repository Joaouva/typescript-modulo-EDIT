import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Use interseção para criar um tipo que combina configurações e restrições.";
const solution = `type ConfiguracaoComRestricoes = Configuracao & Restricoes;`;

const Exercise94: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 94" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 94 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise94;
