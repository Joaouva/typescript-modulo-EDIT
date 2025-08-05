import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Use um tipo união para representar diferentes tipos de resposta.";
const solution = `type TipoResposta = { sucesso: true; dados: any } | { sucesso: false; erro: string };`;

const Exercise78: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 78" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 78 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise78;
