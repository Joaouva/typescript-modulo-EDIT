import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Use interseção para criar um tipo que combina utilizador e permissões.";
const solution = `type UtilizadorComPermissoes = Utilizador & Permissoes;`;

const Exercise64: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 64" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 64 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise64;
