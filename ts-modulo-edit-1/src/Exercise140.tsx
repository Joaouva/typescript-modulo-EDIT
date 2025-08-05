import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Use Record para criar um tipo de cache com timestamps.";
const solution = `type CacheEntry = { data: any; timestamp: number; } type Cache = Record<string, CacheEntry>;`;

const Exercise140: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 140" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 140 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise140;
