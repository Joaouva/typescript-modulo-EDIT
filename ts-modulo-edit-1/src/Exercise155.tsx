import React from "react";
import Exercise from "./Exercise";
import { Box, Typography } from "@mui/material";

const description = "Use Omit para criar um tipo de dados de saída (excluindo dados de entrada).";
const solution = `type OutputData = Omit<ProcessedData, 'inputData' | 'rawInput' | 'sourceData'>;`;

const Exercise155: React.FC = () => {
  // Implementation will be added manually
  return (
    <Exercise title="Exercise 155" description={description} solution={solution}>
      <Box>
        <Typography variant="body1">
          Exercise 155 implementation
        </Typography>
      </Box>
    </Exercise>
  );
};

export default Exercise155;
