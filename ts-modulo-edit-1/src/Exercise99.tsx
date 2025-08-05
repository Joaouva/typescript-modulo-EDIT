import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Use interseção para criar um tipo que combina dados e transformações.";
const solution = `type DadosTransformados = Dados & Transformacoes;`;

const Exercise99: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 99" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 99 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise99;
