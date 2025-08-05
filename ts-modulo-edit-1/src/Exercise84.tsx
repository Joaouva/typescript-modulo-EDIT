import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Use interseção para criar um tipo que combina perfil e preferências.";
const solution = `type PerfilCompleto = Perfil & Preferencias;`;

const Exercise84: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 84" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 84 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise84;
