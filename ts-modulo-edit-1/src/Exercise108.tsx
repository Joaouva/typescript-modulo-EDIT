import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Crie um objeto Readonly.";
const solution = `const config: Readonly<{ porta: number; host: string }> = { porta: 3000, host: 'localhost' };`;

const Exercise108: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 108" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 108 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise108;
