import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Use interseção para criar um tipo que combina autenticação e autorização.";
const solution = `type AutenticacaoCompleta = Autenticacao & Autorizacao;`;

const Exercise74: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 74" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 74 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise74;
