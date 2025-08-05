import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Use Record para criar um tipo de índice de objetos.";
const solution = `type ObjectIndex = Record<string, { id: string; name: string; }>;`;

const Exercise150: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 150" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 150 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise150;
