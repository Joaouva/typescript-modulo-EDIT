import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Use um tipo união para uma variável que pode ser string ou number.";
const solution = `let valor: string | number = 'texto';`;

const Exercise58: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 58" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 58 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise58;
