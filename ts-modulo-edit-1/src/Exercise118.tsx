import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Crie um tipo que torna algumas propriedades readonly e outras opcionais.";
const solution = `type MixedProps = Readonly<{ id: string }> & Partial<{ name: string; email: string }>;`;

const Exercise118: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 118" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 118 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise118;
