import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Crie um objeto com um método que soma dois números.";
const solution = `const calculator = { add: (a: number, b: number) => a + b };`;

const Exercise10: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 10" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 10 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise10;
