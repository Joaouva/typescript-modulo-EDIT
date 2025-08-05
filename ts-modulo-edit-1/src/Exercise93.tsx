import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Use um tipo união para representar diferentes tipos de conteúdo.";
const solution = `type TipoConteudo = 'texto' | 'imagem' | 'video' | 'audio' | 'documento';`;

const Exercise93: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 93" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 93 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise93;
