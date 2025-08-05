import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Escreva uma função que aceita parâmetros nomeados usando um objeto.";
const solution = `function createUser({ nome, email, idade }: { nome: string; email: string; idade: number }) { return { nome, email, idade }; }`;

const Exercise24: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 24" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 24 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise24;
