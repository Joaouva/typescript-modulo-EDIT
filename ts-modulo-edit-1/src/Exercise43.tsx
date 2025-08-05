import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Crie um tipo para um sistema de configuração com valores por defeito.";
const solution = `interface Configuracao { porta: number; host: string; debug: boolean; timeout: number; }`;

const Exercise43: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 43" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 43 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise43;
