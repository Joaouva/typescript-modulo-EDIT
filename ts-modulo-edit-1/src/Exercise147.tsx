import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Use type assertion para converter um tipo primitivo para outro.";
const solution = `const str = '123'; const num = str as unknown as number;`;

const Exercise147: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 147" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 147 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise147;
