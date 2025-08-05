import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Use um tipo união para representar diferentes tipos de dados.";
const solution = `type TipoDados = string | number | boolean | null | undefined;`;

const Exercise73: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 73" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 73 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise73;
