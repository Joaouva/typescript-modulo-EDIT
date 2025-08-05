import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Use um tipo união para representar diferentes tipos de sessão.";
const solution = `type TipoSessao = 'ativa' | 'expirada' | 'invalida' | 'renovada';`;

const Exercise103: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 103" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 103 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise103;
