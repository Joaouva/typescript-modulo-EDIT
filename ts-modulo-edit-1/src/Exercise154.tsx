import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Use Pick para criar um tipo de dados essenciais.";
const solution = `type EssentialData = Pick<FullData, 'id' | 'name' | 'type'>;`;

const Exercise154: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 154" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 154 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise154;
