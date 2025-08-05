import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Crie um tipo para um carro com propriedades readonly.";
const solution = `interface Carro { readonly marca: string; readonly modelo: string; ano: number; }`;

const Exercise17: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 17" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 17 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise17;
