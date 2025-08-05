import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Escreva uma função com um parâmetro opcional.";
const solution = "function greet(name?: string): string { return \`Hello ${name || 'World'}\`; }";

const Exercise8: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 8" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 8 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise8;
