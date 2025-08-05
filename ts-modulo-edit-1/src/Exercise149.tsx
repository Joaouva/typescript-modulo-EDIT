import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Use Partial para criar um tipo de configuração opcional.";
const solution = `type OptionalSettings = Partial<Settings>;`;

const Exercise149: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 149" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 149 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise149;
