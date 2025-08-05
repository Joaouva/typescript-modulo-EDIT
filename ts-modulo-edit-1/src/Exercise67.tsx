import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Crie um enum para tipos de conteúdo (Artigo, Vídeo, Imagem, Áudio).";
const solution = `enum TipoConteudo { Artigo = 'artigo', Video = 'video', Imagem = 'imagem', Audio = 'audio' }`;

const Exercise67: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 67" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 67 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise67;
