import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Use Omit para criar um tipo de dados públicos (excluindo dados privados).";
const solution = `type PublicData = Omit<InternalData, 'secretKey' | 'internalId' | 'debugInfo'>;`;

const Exercise135: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 135" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 135 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise135;
