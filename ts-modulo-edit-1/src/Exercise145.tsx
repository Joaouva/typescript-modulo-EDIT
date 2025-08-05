import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Use Omit para criar um tipo de dados de entrada (excluindo dados calculados).";
const solution = `type InputData = Omit<ProcessedData, 'calculatedField' | 'computedValue' | 'derivedProperty'>;`;

const Exercise145: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 145" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 145 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise145;
