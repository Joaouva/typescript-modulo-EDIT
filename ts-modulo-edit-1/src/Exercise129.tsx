import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Use Record para criar um tipo de mapeamento de IDs para objetos.";
const solution = `type UserMap = Record<string, User>;`;

const Exercise129: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 129" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 129 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise129;
