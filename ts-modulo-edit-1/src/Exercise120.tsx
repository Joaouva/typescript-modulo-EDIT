import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Use Record para criar um tipo de configuração com valores booleanos.";
const solution = `type FeatureFlags = Record<string, boolean>;`;

const Exercise120: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 120" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 120 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise120;
