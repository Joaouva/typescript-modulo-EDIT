import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Use um tipo união para representar diferentes tipos de resultado.";
const solution = `type TipoResultado = 'sucesso' | 'erro' | 'parcial' | 'pendente';`;

const Exercise98: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 98" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 98 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise98;
