import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Use um tipo interseção para uma pessoa que é estudante e trabalhador.";
const solution = `type PessoaCompleta = Estudante & Trabalhador;`;

const Exercise59: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 59" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 59 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise59;
