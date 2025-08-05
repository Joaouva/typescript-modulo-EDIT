import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Use Record para criar um tipo com chaves string e valores number.";
const solution = `type Contadores = Record<string, number>;`;

const Exercise110: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 110" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 110 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise110;
