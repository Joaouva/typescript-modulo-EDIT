import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Crie uma interface para um sistema de eventos.";
const solution = `interface SistemaEventos { on: (event: string, callback: Function) => void; emit: (event: string, data: any) => void; }`;

const Exercise91: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 91" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 91 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise91;
