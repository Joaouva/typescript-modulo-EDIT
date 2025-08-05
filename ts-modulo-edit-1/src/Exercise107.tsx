import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Use type assertion para tratar uma variável como outro tipo.";
const solution = `const valor = '123' as string; const numero = valor as unknown as number;`;

const Exercise107: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 107" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 107 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise107;
