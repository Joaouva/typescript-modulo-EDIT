import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Use um tipo união para representar diferentes tipos de erro.";
const solution = `type TipoErro = 'validacao' | 'rede' | 'sistema' | 'negocio';`;

const Exercise88: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 88" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 88 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise88;
