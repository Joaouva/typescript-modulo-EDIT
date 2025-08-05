import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Crie uma interface para um sistema de cache.";
const solution = `interface SistemaCache { get: (key: string) => any; set: (key: string, value: any) => void; clear: () => void; }`;

const Exercise81: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 81" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 81 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise81;
