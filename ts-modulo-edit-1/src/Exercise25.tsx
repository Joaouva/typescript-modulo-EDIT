import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Crie um tipo para um evento com timestamp e dados genéricos.";
const solution = `interface Evento<T> { timestamp: Date; dados: T; tipo: string; }`;

const Exercise25: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 25" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 25 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise25;
