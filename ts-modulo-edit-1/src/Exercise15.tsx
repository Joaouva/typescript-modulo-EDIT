import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Crie um objeto com métodos que calculam área e perímetro de um retângulo.";
const solution = `const retangulo = { area: (l: number, w: number) => l * w, perimetro: (l: number, w: number) => 2 * (l + w) };`;

const Exercise15: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 15" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 15 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise15;
