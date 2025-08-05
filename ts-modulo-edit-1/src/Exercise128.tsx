import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Crie um tipo que combina Readonly e Partial para diferentes propriedades.";
const solution = `type Config = Readonly<{ id: string }> & Partial<{ name: string; description: string }>;`;

const Exercise128: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 128" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 128 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise128;
