import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Use type assertion para converter um tipo união para um tipo específico.";
const solution = `const value: string | number = 'hello'; const str = value as string;`;

const Exercise127: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 127" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 127 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise127;
