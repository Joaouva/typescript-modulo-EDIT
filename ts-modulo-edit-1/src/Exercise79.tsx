import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Use interseção para criar um tipo que combina dados e metadados.";
const solution = `type DadosComMetadados = Dados & Metadados;`;

const Exercise79: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 79" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 79 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise79;
