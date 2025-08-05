import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Use Pick para criar um tipo que seleciona apenas propriedades de leitura.";
const solution = `type ReadonlyUser = Pick<User, 'id' | 'createdAt'>;`;

const Exercise124: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 124" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 124 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise124;
