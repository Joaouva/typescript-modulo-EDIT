import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Crie uma interface para um carro com marca e ano.";
const solution = `interface Carro { marca: string; ano: number; }`;

const Exercise56: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 56" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 56 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise56;
