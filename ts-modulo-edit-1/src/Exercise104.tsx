import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Use interseção para criar um tipo que combina utilizador e sessão.";
const solution = `type UtilizadorComSessao = Utilizador & Sessao;`;

const Exercise104: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 104" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 104 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise104;
