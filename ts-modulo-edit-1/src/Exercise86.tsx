import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Crie uma interface para um sistema de paginação.";
const solution = `interface SistemaPaginacao { pagina: number; porPagina: number; total: number; proxima: () => void; anterior: () => void; }`;

const Exercise86: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 86" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 86 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise86;
